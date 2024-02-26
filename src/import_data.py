from .models import *

from .test.data.users import USERS
from .test.data.courses import COURSES
from .test.data.chapters import CHAPTERS
from .test.data.lessons import LESSONS
from .test.data.objectives import OBJECTIVES



def import_data(db):
    add_all = lambda model, data: db.session.add_all([model(**d) for d in data])

    add_all(User, USERS)
    add_all(Course, COURSES)
    add_all(Chapter, CHAPTERS)
    add_all(Lesson, LESSONS)
    add_all(LearningObjective, OBJECTIVES)
    db.session.commit()
