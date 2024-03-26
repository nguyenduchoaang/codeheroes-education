from flask import Blueprint

from .controller import Controller

Router = Blueprint("chapter_routes", __name__, url_prefix="/chapters")

Router.route("/", methods=["POST"])(Controller.create)
Router.route("/<int:id>/", methods=["GET"])(Controller.one)
Router.route("/<int:id>/", methods=["PUT"])(Controller.update_all)
Router.route("/<int:id>/", methods=["PATCH"])(Controller.update_partial)
Router.route("/<int:id>/", methods=["DELETE"])(Controller.delete)
