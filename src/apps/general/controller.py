import os
import time

from flask import jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required


class Controller:
    @staticmethod
    def home():
        return "Hello World!"

    @staticmethod
    @jwt_required()
    def upload():
        img = request.files.get("image", None)
        if img is None:
            return jsonify(msg="Failed")

        identity = get_jwt_identity()
        username = identity["username"]
        path = os.path.join("static", "img", f"{username}_{int(time.time())}_{img.filename}")
        dest = os.path.join("src", path)
        img.save(dest)
        return jsonify(msg="Success", path=path), 200
