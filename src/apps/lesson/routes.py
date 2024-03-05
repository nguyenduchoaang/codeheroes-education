from flask import Blueprint

from .controller import LessonController

LessonRouter = Blueprint("lesson_routes", __name__, url_prefix="/lessons")

LessonRouter.route("/", methods=["POST"])(LessonController.create)
LessonRouter.route("/<string:uuid>/", methods=["GET"])(LessonController.one)
LessonRouter.route("/<string:uuid>/", methods=["PUT"])(LessonController.update_all)
LessonRouter.route("/<string:uuid>/", methods=["PATCH"])(LessonController.update_partial)
LessonRouter.route("/<string:uuid>/", methods=["DELETE"])(LessonController.delete)
LessonRouter.route("/<string:uuid>/save-progress/", methods=["POST"])(LessonController.save_progress)
LessonRouter.route("/<string:uuid>/comments/", methods=["GET"])(LessonController.all_comments)
LessonRouter.route("/<string:uuid>/comments/", methods=["POST"])(LessonController.create_comment)

