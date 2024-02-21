from flask import jsonify, request
from sqlalchemy import select
from flask_jwt_extended import create_access_token

from src import db
from src.models import User
from src.utils.hash import hash_password


class AuthController:
    @staticmethod
    def register():
        data = request.get_json()
        username = data.get("username", None)
        email = data.get("email", None)
        name = data.get("name", None)
        password = data.get("password", None)

        stmt = select(User.username).where(User.username == username)
        user = db.session.execute(stmt).first()
        if user is not None:
            return jsonify({"message": "Register failed"}), 300

        user = User(username=username, password=hash_password(password),
                    email=email, name=name)
        db.session.add(user)
        db.session.commit()
        return jsonify({"message": "Register success"}), 201

    @staticmethod
    def login():
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")

        stmt = select(User).where(User.username == username,
                                  User.password == hash_password(password))
        user = db.session.execute(stmt).first()
        if user is None:
            return jsonify({"message": "Bad username or password"}), 401

        access_token = create_access_token(identity=user[0].username)
        return jsonify(access_token)

    @staticmethod
    def logout():
        return
