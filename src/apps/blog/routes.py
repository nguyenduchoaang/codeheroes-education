from flask import Blueprint

from .controller import Controller

Router = Blueprint("blog_routes", __name__, url_prefix="/blogs")

Router.route("/", methods=["GET"])(Controller.all)
Router.route("/", methods=["POST"])(Controller.create)
Router.route("/<int:id>/", methods=["GET"])(Controller.one)
Router.route("/<int:id>/", methods=["PATCH"])(Controller.update_partial)
Router.route("/<int:id>/", methods=["DELETE"])(Controller.delete)
Router.route("/<int:id>/comments/", methods=["GET"])(Controller.all_comments)
Router.route("/<int:id>/comments/", methods=["POST"])(Controller.create_comment)
Router.route("/<int:id>/comments/<int:comment_id>/", methods=["DELETE"])(Controller.delete_comment)
Router.route("/<int:id>/comments/<int:comment_id>/", methods=["PATCH"])(Controller.update_comment)
