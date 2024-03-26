import uuid
from datetime import datetime

from flask import jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import and_, delete, or_, select, text, update

from src import db
from src.models import Chapter, Comment, Lesson, Progress, ProgressScore, User
from src.utils.uuid import bin_to_uuid, uuid_to_bin, is_valid_uuid


class Controller:
    @staticmethod
    def __add_conditional_statement(stmt, uuid: str):
        if len(uuid) == 36 and is_valid_uuid(uuid):
            return stmt.where(Lesson.uuid == uuid_to_bin(uuid))
        try:
            id = int(uuid) 
        except ValueError:
            raise ValueError
        return stmt.where(Lesson.id == id)

    @staticmethod
    def one(uuid: str):
        try:
            stmt = Controller.__add_conditional_statement(select(Lesson), uuid)
        except ValueError:
            return jsonify({"message": "Lesson ID is invalid"})

        lesson = db.session.execute(stmt).first()
        if lesson is None:
            return jsonify({"message": "Lesson ID not exist"})
        return jsonify(lesson[0].as_dict())

    @staticmethod
    def create():
        data = request.get_json()
        video_url = data.get("video_url", None)
        title = data.get("title", "")
        duration = data.get("duration", 60)
        content = data.get("content", "")
        chapter_id = data.get("chapter_id", None)

        if chapter_id is None:
            return jsonify(msg="Missing Chapter ID")

        chapter = db.session.execute(select(Chapter).where(Chapter.id == chapter_id)).first()
        if chapter is None:
            return jsonify(msg="Chapter ID is invalid")


        lesson = Lesson(
            uuid=uuid.uuid4().bytes,
            video_url=video_url,
            title=title,
            duration=duration,
            content=content,
            create_time=datetime.now(),
            order=len(chapter.lessons) + 1,
            chapter_id=chapter_id
        )
        db.session.add(lesson)
        db.session.commit()
        return jsonify({"message": "Create Lesson successfully"}), 201

    @staticmethod
    def update_partial(uuid: str):
        try:
            stmt = Controller.__add_conditional_statement(update(Lesson), uuid)
        except ValueError:
            return jsonify({"message": "Lesson ID is invalid"})

        data = request.get_json()
        stmt = stmt.values(**data)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Update Lesson successfully"}), 200

    @staticmethod
    def update_all(uuid: str):
        try:
            stmt = Controller.__add_conditional_statement(update(Lesson), uuid)
        except ValueError:
            return jsonify({"message": "Lesson ID is invalid"})

        data = request.get_json()
        title = data.get("title", "")
        video_url = data.get("video_url", None)
        duration = data.get("duration", None)
        content = data.get("content", "")
        chapter_id = data.get("chapter_id", None)

        if chapter_id is None:
            return jsonify({"message": "Update failed. Field `chapter_id` is invalid."})

        stmt = stmt.values(
            title=title,
            video_url=video_url,
            duration=duration,
            content=content,
            chapter_id=chapter_id
        )
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Update Lesson successfully"}), 200

    @staticmethod
    def delete(uuid: str):
        try:
            stmt = Controller.__add_conditional_statement(delete(Lesson), uuid)
        except ValueError:
            return jsonify({"message": "Lesson ID is invalid"})

        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Delete Lesson successfully"}), 200

    @staticmethod
    @jwt_required()
    def save_progress(uuid: str):
        identity = get_jwt_identity()
        username = identity["username"]

        user = db.session.execute(select(User).where(User.username == username)).first()
        if user is None:
            return jsonify(msg="User does not exist")

        # Check lesson is completed
        stmt = text("""
            update progress
            set completed = 1,
                completed_at = :time
            where user_id = :user_id
                and lesson_id = (
                    select id
                    from lesson
                    where id = :id
                        or uuid = :uuid
                )
        """)
        db.session.execute(stmt, {
            "user_id": user[0].id,
            "id": uuid,
            "uuid": uuid_to_bin(uuid),
            "time": datetime.now()
        })

        # Add new track on next lesson
        try:
            stmt = Controller.__add_conditional_statement(select(Lesson), uuid)
        except ValueError:
            return jsonify({"message": "Lesson ID is invalid"})

        lesson = db.session.execute(stmt).first()
        if lesson is None:
            return jsonify({"message": "Lesson ID does not exist"})

        next_lesson_uuid = None
        reach_current_lesson = False
        for chapter in lesson[0].chapter.course.chapters:
            for lesson in chapter.lessons:
                if reach_current_lesson:
                    next_lesson_uuid = bin_to_uuid(lesson.uuid)
                    progress = Progress(course_id=lesson.chapter.course_id)
                    progress.lesson = lesson
                    user[0].lesson_progress.append(progress)
                    break
                elif str(lesson.id) == uuid or lesson.uuid == uuid_to_bin(uuid):
                    reach_current_lesson = True
                    continue
            if reach_current_lesson:
                break
        db.session.commit()
        return jsonify(msg="Update successfully", next=next_lesson_uuid), 200

    @staticmethod
    def all_comments(uuid: str):
        try:
            stmt = Controller.__add_conditional_statement(select(Lesson), uuid)
        except ValueError:
            return jsonify({"message": "Lesson ID is invalid"})

        lesson = db.session.execute(stmt).first()
        if lesson is None:
            return jsonify({"message": "Lesson ID does not exist"})

        return jsonify([comment.as_dict() for comment in lesson[0].comments]), 200

    @staticmethod
    @jwt_required()
    def create_comment(uuid: str):
        try:
            stmt = Controller.__add_conditional_statement(select(Lesson), uuid)
        except ValueError:
            return jsonify(msg="Lesson ID is invalid")

        lesson = db.session.execute(stmt).first()
        if lesson is None:
            return jsonify(msg="Lesson ID does not exist")

        identity = get_jwt_identity()

        data = request.get_json()
        content = data.get("content", "")
        parent_id = data.get("parent_id", None)

        comment = Comment(content=content, parent_id=parent_id,
                          user_id=identity["id"], lesson_id=lesson[0].id,
                          create_time=datetime.now())
        db.session.add(comment)
        db.session.commit()
        return jsonify(msg="Create Comment successfully"), 200

    @staticmethod
    @jwt_required()
    def delete_comment(uuid: str, comment_id: int):
        identity = get_jwt_identity()
        stmt = delete(Comment).where(or_(
            and_(Comment.id == comment_id, Comment.user_id == identity["id"]),
            Comment.parent_id == comment_id
        ))
        db.session.execute(stmt)
        db.session.commit()
        return jsonify(msg="Delete Comment successfully"), 200

    @staticmethod
    @jwt_required()
    def update_comment(uuid: str, comment_id: int):
        identity = get_jwt_identity()
        data = request.get_json()
        content = data.get("content", "")
        stmt = update(Comment) \
            .where(and_(Comment.id == comment_id, Comment.user_id == identity["id"])) \
            .values(content=content)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify(msg="Update Comment successfully"), 200

    @staticmethod
    @jwt_required()
    def submit(uuid: str):
        identity = get_jwt_identity()

        try:
            stmt = Controller.__add_conditional_statement(select(Lesson), uuid)
        except ValueError:
            return jsonify({"message": "Lesson ID is invalid"})

        lesson = db.session.execute(stmt).first()
        if lesson is None:
            return jsonify({"message": "Lesson ID does not exist"})

        data = request.get_json()
        score = data.get("score", 0)

        ProgressScore(user_id=identity["id"], lesson_id=lesson[0].id,
                      score=score, completed_at=datetime.now())

        db.session.commit()
        return jsonify(msg="Submit successfully"), 200
