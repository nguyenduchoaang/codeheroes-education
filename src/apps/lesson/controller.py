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
        name = data.get("name", None)
        course_id = data.get("course_id", None)

        chapter = Lesson(name=name, course_id=course_id)
        db.session.add(chapter)
        db.session.commit()
        return jsonify({"message": "Create Chapter successfully"})

    @staticmethod
    def delete(uuid: int):
        stmt = delete(Lesson).where(Lesson.uuid == uuid)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Delete Chapter successfully"})


