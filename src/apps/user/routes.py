from flask import Blueprint

from .controller import UserController

UserRouter = Blueprint("user_routes", __name__, url_prefix="/users")

UserRouter.route("/<string:username>/", methods=["GET"])(UserController.one)
UserRouter.route("/<string:username>/enrollments/", methods=["GET"])(UserController.enrollments)
