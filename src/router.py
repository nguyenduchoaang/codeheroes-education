import sys
import os
import os.path as p
import importlib.util

from flask import Flask


class Router:
    def load_module(self, module_name):
        spec = importlib.util.spec_from_file_location(
            f"src.apps.{module_name}.routes",
            p.join(self.apps_root, module_name, "routes.py")
        )
        module = importlib.util.module_from_spec(spec)
        sys.modules[f"src.apps.{module_name}.routes"] = module
        spec.loader.exec_module(module)
        return module

    def load_routes(self):
        for filename in os.listdir(self.apps_root):
            app = p.join(self.apps_root, filename)
            if not p.isdir(app):
                continue

            if ".ignoreroute" in os.listdir(app):
                continue

            if "routes.py" not in os.listdir(app):
                continue

            try:
                module = self.load_module(filename)
                self.flask_app.register_blueprint(module.Router)
                print(f"Loaded route {filename}")
            except Exception as e:
                print(f"Failed to load route {filename}\n{type(e).__name__}: {e}")

    def __init__(self, flask_app: Flask):
        print("*** [ Initialize Router ] ***")

        self.apps_root = p.join(p.realpath(p.dirname(__name__)), "src", "apps")
        self.flask_app = flask_app
        self.load_routes()