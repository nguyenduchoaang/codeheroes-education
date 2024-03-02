from flask import Blueprint

from .controller import UserController

UserRouter = Blueprint("user_routes", __name__, url_prefix="/users")

UserRouter.route("/<int:id>/", methods=["GET"])(UserController.one)
UserRouter.route("/<int:id>/enrollments/", methods=["GET"])(UserController.enrollments)
