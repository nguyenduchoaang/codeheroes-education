from flask import jsonify, request
from sqlalchemy import delete, select

from src import db
from src.models import Chapter


class ChapterController:
    @staticmethod
    def one(id: int):
        stmt = select(Chapter).where(Chapter.id == id)
        chapter = db.session.execute(stmt).first()
        if chapter is None:
            return jsonify({"message": "Chapter ID not exist"})
        return jsonify(chapter[0].as_dict("lessons"))

    @staticmethod
    def create():
        data = request.get_json()
        name = data.get("name", None)
        course_id = data.get("course_id", None)

        chapter = Chapter(name=name, course_id=course_id)
        db.session.add(chapter)
        db.session.commit()
        return jsonify({"message": "Create Chapter successfully"})

    @staticmethod
    def delete(id: int):
        stmt = delete(Chapter).where(Chapter.id == id)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Delete Chapter successfully"})

