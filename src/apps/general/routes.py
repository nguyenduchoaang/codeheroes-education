from flask import Blueprint

from .controller import GeneralController

GeneralRouter = Blueprint("general_routes", __name__)

GeneralRouter.route("/", methods=["GET"])(GeneralController.home)
GeneralRouter.route("/upload", methods=["POST"])(GeneralController.upload)
