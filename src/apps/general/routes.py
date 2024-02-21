from flask import Blueprint

from .controller import GeneralController

GeneralRouter = Blueprint("general_routes", __name__, url_prefix="/test")

GeneralRouter.route("/", methods=["GET"])(GeneralController.home)
