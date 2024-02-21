from flask import Blueprint

from .controller import AuthController

AuthRouter = Blueprint("auth_routes", __name__, url_prefix="/auth")

AuthRouter.route("/login", methods=["POST"])(AuthController.login)
AuthRouter.route("/register", methods=["POST"])(AuthController.register)
# GeneralRouter.route("/logout", methods=["GET"])(AuthController.logout)
