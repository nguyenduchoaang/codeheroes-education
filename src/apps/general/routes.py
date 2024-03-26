from flask import Blueprint

from .controller import Controller

Router = Blueprint("general_routes", __name__)

Router.route("/", methods=["GET"])(Controller.home)
Router.route("/upload", methods=["POST"])(Controller.upload)
