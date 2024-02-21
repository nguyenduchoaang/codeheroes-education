from flask import Blueprint

from .controller import LessonController

LessonRouter = Blueprint("lesson_routes", __name__, url_prefix="/lessons")

LessonRouter.route("/", methods=["POST"])(LessonController.create)
LessonRouter.route("/<string:uuid>/", methods=["GET"])(LessonController.one)
LessonRouter.route("/<int:id>/", methods=["DELETE"])(LessonController.delete)

