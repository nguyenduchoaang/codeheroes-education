from flask import jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import select

from src import db
from src.models import User


class UserController:
    @staticmethod
    @jwt_required(optional=True)
    def one(username: str):
        stmt = select(User).where(User.username == username)
        user = db.session.execute(stmt).first()
        if user is None:
            return jsonify(msg="User do not exist"), 404

        return jsonify(user[0].as_dict()), 200

    @staticmethod
    @jwt_required()
    def enrollments(username: str):
        if username != get_jwt_identity()["username"]:
            return jsonify(msg=""), 400

        stmt = select(User).where(User.username == username)
        user = db.session.execute(stmt).first()
        if user is None:
            return jsonify(msg="User do not exist"), 404

        return jsonify([enrollment.as_dict() for enrollment in user[0].courses]), 200
