import os
from urllib.parse import quote

from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from dotenv import dotenv_values

from .router import Router

config = dotenv_values(".env")

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
        user=config["DB_USER"], password=quote(config["DB_PASSWORD"]),
        host=config["DB_HOST"], port=config["DB_PORT"],
        db_name=config["DB_NAME"]
    )
)

db = SQLAlchemy(app=app)
jwt = JWTManager(app=app)

Router(app)
CORS(app)
