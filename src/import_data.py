from .models import *

from .test.data.users import USERS
from .test.data.courses import COURSES
from .test.data.chapters import CHAPTERS
from .test.data.lessons import LESSONS
from .test.data.objectives import OBJECTIVES
from .test.data.tags import TAGS
from .test.data.course_tag import COURSE_TAG
from .test.data.questions import QUESTIONS
from .test.data.choices import CHOICES



def import_data(db):
    add_all = lambda model, data: db.session.add_all([model(**d) for d in data])

    add_all(User, USERS)
    add_all(Course, COURSES)
    add_all(Chapter, CHAPTERS)
    add_all(Lesson, LESSONS)
    add_all(LearningObjective, OBJECTIVES)
    add_all(Tag, TAGS)
    add_all(Question, QUESTIONS)
    add_all(Choice, CHOICES)
    db.session.commit()
    for data in COURSE_TAG:
        db.session.execute(CourseTag.insert().values(**data))
    db.session.commit()
