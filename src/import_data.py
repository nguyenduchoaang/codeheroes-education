import uuid
from datetime import datetime

from .models import *
from .utils.hash import hash_password

USERS = [
    {
        "username": "user",
        "password": hash_password("123"),
        "email": "test@codeheroes.com",
        "name": "Test User"
    }
]

COURSES = [
    {
        "name": "Xây Dựng Website với ReactJS",
        "price": 0,
        "description": None
    },
    {
        "name": "Làm việc với Terminal & Ubuntu",
        "price": 0,
        "description": None
    },
    {
        "name": "HTML CSS Pro",
        "price": 1_299_000,
        "description": None
    }
]

CHAPTERS = [
    { "name": "Giới thiệu", "course_id": 1 },
    { "name": "Ôn lại ES6+", "course_id": 1 },
    { "name": "React, ReactDOM", "course_id": 1 },
    { "name": "JSX, Components, Props", "course_id": 1 },
    { "name": "Giới thiệu", "course_id": 2 },
    { "name": "Windows Terminal & WSL", "course_id": 2 },
    { "name": "Các lệnh Linux cơ bản", "course_id": 2 },
    { "name": "Chạy dự án React, Node, Laravel", "course_id": 2 },
    { "name": "Deploy dự án với Server thật", "course_id": 2 },
    { "name": "Hoàn thành khóa học", "course_id": 2 }
]

LESSONS = [
    {
        "uuid": uuid.uuid4().bytes,
        "title": "ReactJS là gì? Tại sao nên học ReactJS?",
        "duration": 641,
        "content": "",
        "chapter_id": 1,
        "author_id": 1,
        "create_time": datetime.now()
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "SPA/MPA là gì?",
        "duration": 1340,
        "content": "",
        "chapter_id": 1,
        "author_id": 1,
        "create_time": datetime.now()
    }
]

def import_data(db):
    add_all = lambda model, data: db.session.add_all([model(**d) for d in data])

    add_all(User, USERS)
    add_all(Course, COURSES)
    add_all(Chapter, CHAPTERS)
    add_all(Lesson, LESSONS)
    db.session.commit()
