from flask import jsonify, request
from sqlalchemy import select, delete

from src import db
from src.models import Course


class CourseController:
    @staticmethod
    def all():
        stmt = select(Course)
        rows = db.session.execute(stmt).all()
        return jsonify([course[0].as_dict() for course in rows])

    @staticmethod
    def one(id: int):
        stmt = select(Course).where(Course.id == id)
        course = db.session.execute(stmt).first()
        if course is None:
            return jsonify({"message": "Course ID not exist"})
        return jsonify(course[0].as_dict("chapters"))

    @staticmethod
    def create():
        data = request.get_json()
        name = data.get("name", None)
        price = data.get("price", None)
        description = data.get("description", None)

        course = Course(name=name, price=price, description=description)
        db.session.add(course)
        db.session.commit()
        return jsonify({"message": "Create course successfully"})

    @staticmethod
    def delete(id: int):
        stmt = delete(Course).where(Course.id == id)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Delete course successfully"})
