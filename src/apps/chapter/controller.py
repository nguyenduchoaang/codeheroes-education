from flask import jsonify, request
from sqlalchemy import delete, select, update

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
    def update_partial(id: int):
        data = request.get_json()

        stmt = update(Chapter).where(Chapter.id == id).values(**data)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Update Chapter successfully"})

    @staticmethod
    def update_all(id: int):
        data = request.get_json()
        name = data.get("name", "")
        course_id = data.get("course_id", None)

        if course_id is None:
            return jsonify({"message": "Update failed. Field `course_id` is invalid."})

        stmt = update(Chapter).where(Chapter.id == id).values(
            name=name,
            course_id=course_id
        )
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Update Chapter successfully"})

    @staticmethod
    def delete(id: int):
        stmt = delete(Chapter).where(Chapter.id == id)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Delete Chapter successfully"})

