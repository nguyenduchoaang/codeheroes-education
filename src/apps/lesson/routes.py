from flask import Blueprint

from .controller import Controller

Router = Blueprint("lesson_routes", __name__, url_prefix="/lessons")

Router.route("/", methods=["POST"])(Controller.create)
Router.route("/<string:uuid>/", methods=["GET"])(Controller.one)
Router.route("/<string:uuid>/", methods=["PUT"])(Controller.update_all)
Router.route("/<string:uuid>/", methods=["PATCH"])(Controller.update_partial)
Router.route("/<string:uuid>/", methods=["DELETE"])(Controller.delete)
Router.route("/<string:uuid>/submit/", methods=["POST"])(Controller.submit)
Router.route("/<string:uuid>/save-progress/", methods=["POST"])(Controller.save_progress)
Router.route("/<string:uuid>/comments/", methods=["GET"])(Controller.all_comments)
Router.route("/<string:uuid>/comments/", methods=["POST"])(Controller.create_comment)
Router.route("/<string:uuid>/comments/<int:comment_id>/", methods=["DELETE"])(Controller.delete_comment)
Router.route("/<string:uuid>/comments/<int:comment_id>/", methods=["PATCH"])(Controller.update_comment)

