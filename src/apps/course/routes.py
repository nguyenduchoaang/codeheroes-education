from flask import Blueprint

from .controller import Controller

Router = Blueprint("courses_routes", __name__, url_prefix="/courses")

Router.route("/", methods=["GET"])(Controller.all)
Router.route("/", methods=["POST"])(Controller.create)
Router.route("/<int:id>/", methods=["GET"])(Controller.one)
Router.route("/<int:id>/", methods=["PUT"])(Controller.update_all)
Router.route("/<int:id>/", methods=["PATCH"])(Controller.update_partial)
Router.route("/<int:id>/", methods=["DELETE"])(Controller.delete)
Router.route("/<int:id>/enroll/", methods=["POST"])(Controller.enroll)
Router.route("/<int:id>/current-lesson/", methods=["GET"])(Controller.current_lesson)
