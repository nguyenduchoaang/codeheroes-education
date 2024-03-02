from flask import Flask


class Router:
    def __init__(self, app: Flask) -> None:
        print("*** [ Initialize Router ] ***")

        from .apps.general.routes import GeneralRouter
        app.register_blueprint(GeneralRouter)

        from .apps.auth.routes import AuthRouter
        app.register_blueprint(AuthRouter)

        from .apps.course.routes import CourseRouter
        app.register_blueprint(CourseRouter)

        from .apps.chapter.routes import ChapterRouter
        app.register_blueprint(ChapterRouter)

        from .apps.lesson.routes import LessonRouter
        app.register_blueprint(LessonRouter)

        from .apps.user.routes import UserRouter
        app.register_blueprint(UserRouter)
