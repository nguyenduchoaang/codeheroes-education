import os
from urllib.parse import quote

from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

from .router import Router

app = Flask(__name__)
app.secret_key = '689567gh$^^&*#%^&*^&%^*DFGH^&*&*^*'
# app.config["SQLALCHEMY_DATABASE_URI"] = (
#     "mysql+pymysql://{user}:{password}@{host}:{port}/{db_name}".format(
#         user=os.getenv("DB_USER"), password=quote(os.getenv("DB_PASS") or ''),
#         host=os.getenv("DB_HOST"), port=os.getenv("DB_PORT"),
#         name=os.getenv("DB_NAME")
#     )
# )
app.config["SQLALCHEMY_DATABASE_URI"] = (
    "mysql+pymysql://{user}:{password}@{host}:{port}/{db_name}".format(
        user="testuser", password=quote("Admin@123"),
        host="localhost", port="3306",
        db_name="codeheroes"
    )
)

db = SQLAlchemy(app=app)
jwt = JWTManager(app=app)

Router(app)
CORS(app)
