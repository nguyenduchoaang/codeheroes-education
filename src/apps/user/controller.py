import uuid

from flask import jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import delete, select, text, update

from src import db
from src.models import User


class UserController:
    @staticmethod
    @jwt_required(optional=True)
    def one(id: int):
        stmt = select(User).where(User.id == id)
        user = db.session.execute(stmt).first()
        if user is None:
            return jsonify(msg="User do not exist"), 404

        return jsonify(user[0].as_dict()), 200

    @staticmethod
    @jwt_required()
    def enrollments(id: int):
        stmt = select(User).where(User.id == id)
        user = db.session.execute(stmt).first()
        if user is None:
            return jsonify(msg="User do not exist"), 404

        if user[0].username != get_jwt_identity()["username"]:
            return jsonify(msg=""), 400
        return jsonify([enrollment.as_dict() for enrollment in user[0].courses]), 200
