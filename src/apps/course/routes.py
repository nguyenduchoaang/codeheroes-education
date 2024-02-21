from flask import Blueprint

from .controller import CourseController

CourseRouter = Blueprint("courses_routes", __name__, url_prefix="/courses")

CourseRouter.route("/", methods=["GET"])(CourseController.all)
CourseRouter.route("/", methods=["POST"])(CourseController.create)
CourseRouter.route("/<int:id>/", methods=["GET"])(CourseController.one)
CourseRouter.route("/<int:id>/", methods=["PUT"])(CourseController.update_all)
CourseRouter.route("/<int:id>/", methods=["PATCH"])(CourseController.update_partial)
CourseRouter.route("/<int:id>/", methods=["DELETE"])(CourseController.delete)
