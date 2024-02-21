import uuid
from datetime import datetime

from flask import jsonify, request
from sqlalchemy import delete, select
from sqlalchemy.exc import StatementError

from src import db
from src.models import Lesson
from src.utils.uuid import uuid_to_bin


class LessonController:
    @staticmethod
    def one(uuid: str):
        try:
            stmt = select(Lesson).where(Lesson.uuid == uuid_to_bin(uuid))
            lesson = db.session.execute(stmt).first()
        except (StatementError, ValueError):
            stmt = select(Lesson).where(Lesson.id == int(uuid))
            lesson = db.session.execute(stmt).first()
        if lesson is None:
            return jsonify({"message": "Lesson UUID not exist"})
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
            uuid=uuid.uuid4(),
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
        return jsonify({"message": "Create Chapter successfully"})

    @staticmethod
    def delete(uuid: int):
        stmt = delete(Lesson).where(Lesson.uuid == uuid)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Delete Chapter successfully"})


