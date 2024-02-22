from flask import jsonify, request
from sqlalchemy import select, delete, update

from src import db
from src.models import Course


class CourseController:
    @staticmethod
    def all():
        stmt = select(Course)
        rows = db.session.execute(stmt).all()
        return jsonify([course[0].as_dict() for course in rows]), 200

    @staticmethod
    def one(id: int):
        stmt = select(Course).where(Course.id == id)
        course = db.session.execute(stmt).first()
        if course is None:
            return jsonify({"message": "Course ID not exist"}), 404
        return jsonify(course[0].as_dict("chapters")), 200

    @staticmethod
    def create():
        data = request.get_json()
        name = data.get("name", "")
        price = data.get("price", 0)
        description = data.get("description", None)

        course = Course(name=name, price=price, description=description)
        db.session.add(course)
        db.session.commit()
        return jsonify({"message": "Create course successfully"}), 201

    @staticmethod
    def update_partial(id: int):
        data = request.get_json()

        stmt = update(Course).where(Course.id == id).values(**data)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Update course successfully"}), 200

    @staticmethod
    def update_all(id: int):
        data = request.get_json()
        name = data.get("name", None)
        price = data.get("price", None)
        description = data.get("description", None)

        stmt = update(Course).where(Course.id == id).values(
            name=name,
            price=price,
            description=description
        )
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Update course successfully"}), 200

    @staticmethod
    def delete(id: int):
        stmt = delete(Course).where(Course.id == id)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Delete course successfully"}), 200
