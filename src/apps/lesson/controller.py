import uuid
from datetime import datetime

from flask import jsonify, request
from sqlalchemy import delete, select, update

from src import db
from src.models import Lesson
from src.utils.uuid import uuid_to_bin, is_valid_uuid


class LessonController:
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
            stmt = LessonController.__add_conditional_statement(select(Lesson), uuid)
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
        author_id = data.get("author_id", None)

        lesson = Lesson(
            uuid=uuid.uuid4().bytes,
            video_url=video_url,
            title=title,
            duration=duration,
            content=content,
            create_time=datetime.now(),
            chapter_id=chapter_id,
            author_id=author_id
        )
        db.session.add(lesson)
        db.session.commit()
        return jsonify({"message": "Create Lesson successfully"}), 201

    @staticmethod
    def update_partial(uuid: str):
        try:
            stmt = LessonController.__add_conditional_statement(update(Lesson), uuid)
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
            stmt = LessonController.__add_conditional_statement(update(Lesson), uuid)
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
            stmt = LessonController.__add_conditional_statement(delete(Lesson), uuid)
        except ValueError:
            return jsonify({"message": "Lesson ID is invalid"})

        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Delete Chapter successfully"}), 200

