from flask import Blueprint

from .controller import Controller

Router = Blueprint("user_routes", __name__, url_prefix="/users")

Router.route("/<string:username>/", methods=["GET"])(Controller.one)
Router.route("/<string:username>/enrollments/", methods=["GET"])(Controller.enrollments)
