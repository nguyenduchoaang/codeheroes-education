from flask import Blueprint

from .controller import Controller

Router = Blueprint("auth_routes", __name__, url_prefix="/auth")

Router.route("/login", methods=["POST"])(Controller.login)
Router.route("/register", methods=["POST"])(Controller.register)