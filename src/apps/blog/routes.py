from flask import Blueprint

from .controller import BlogController

BlogRouter = Blueprint("blog_routes", __name__, url_prefix="/blogs")

BlogRouter.route("/", methods=["GET"])(BlogController.all)
BlogRouter.route("/", methods=["POST"])(BlogController.create)
BlogRouter.route("/<int:id>/", methods=["GET"])(BlogController.one)
BlogRouter.route("/<int:id>/", methods=["PATCH"])(BlogController.update_partial)
BlogRouter.route("/<int:id>/", methods=["DELETE"])(BlogController.delete)
BlogRouter.route("/<int:id>/comments/", methods=["GET"])(BlogController.all_comments)
BlogRouter.route("/<int:id>/comments/", methods=["POST"])(BlogController.create_comment)
BlogRouter.route("/<int:id>/comments/<int:comment_id>/", methods=["DELETE"])(BlogController.delete_comment)
BlogRouter.route("/<int:id>/comments/<int:comment_id>/", methods=["PATCH"])(BlogController.update_comment)
