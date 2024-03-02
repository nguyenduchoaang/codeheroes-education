from datetime import datetime

from flask import jsonify, request
from sqlalchemy import select, delete, update
from flask_jwt_extended import get_jwt_identity, jwt_required

from src import db
from src.models import Course, Enrollment, Progress, User
from src.utils.uuid import bin_to_uuid


class CourseController:
    @staticmethod
    def all():
        stmt = select(Course)
        rows = db.session.execute(stmt).all()
        return jsonify([
            course[0].as_dict("users_count", "img_url") for course in rows
        ]), 200

    @staticmethod
    def one(id: int):
        stmt = select(Course).where(Course.id == id)
        course = db.session.execute(stmt).first()
        if course is None:
            return jsonify(msg="Course ID not exist"), 404
        return jsonify(course[0].as_dict("chapters", "objectives", "description")), 200

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

    @staticmethod
    @jwt_required()
    def enroll(id: int):
        # Get course
        stmt = select(Course).where(Course.id == id)
        course = db.session.execute(stmt).first()

        if course is None:
            return jsonify(msg="Course ID not exist"), 404

        # Get user
        identity = get_jwt_identity()
        username = identity["username"]
        stmt = select(User).where(User.username == username)
        user = db.session.execute(stmt).first()

        if user is None:
            return jsonify(msg="Invalid user"), 400

        for enrollment in user[0].courses:
            if enrollment.course.id == id:
                return jsonify(msg="Course was enrolled")

        enrollment = Enrollment(start_date=datetime.now())
        enrollment.course = course[0]
        user[0].courses.append(enrollment)

        # Tracking progress for first lesson
        progress = Progress(course_id=id)
        progress.lesson = course[0].chapters[0].lessons[0]
        user[0].lesson_progress.append(progress)

        db.session.commit()

        return jsonify(msg="Enroll course successfully"), 200

    @staticmethod
    @jwt_required()
    def current_lesson(id: str):
        identity = get_jwt_identity()
        username = identity["username"]
        stmt = select(User).where(User.username == username)
        user = db.session.execute(stmt).first()

        if user is None:
            return jsonify(msg="Invalid user"), 400

        current_lesson_uuid = None
        for progress in user[0].lesson_progress:
            if progress.course_id != id:
                continue

            current_lesson_uuid = bin_to_uuid(progress.lesson.uuid)
        return jsonify(current_lesson_uuid=current_lesson_uuid), 200

