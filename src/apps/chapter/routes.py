from flask import Blueprint

from .controller import ChapterController

ChapterRouter = Blueprint("chapter_routes", __name__, url_prefix="/chapters")

ChapterRouter.route("/", methods=["POST"])(ChapterController.create)
ChapterRouter.route("/<int:id>/", methods=["GET"])(ChapterController.one)
ChapterRouter.route("/<int:id>/", methods=["PUT"])(ChapterController.update_all)
ChapterRouter.route("/<int:id>/", methods=["PATCH"])(ChapterController.update_partial)
ChapterRouter.route("/<int:id>/", methods=["DELETE"])(ChapterController.delete)
