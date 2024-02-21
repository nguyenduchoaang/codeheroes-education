import uuid
from .models import *
from .utils.hash import hash_password

COURSES = [
    {
        "name": "Xây Dựng Website với ReactJS",
        "price": 0,
        "description": ""
    },
    {
        "name": "Làm việc với Terminal & Ubuntu",
        "price": 0,
        "description": ""
    },
    {
        "name": "HTML CSS Pro",
        "price": 1_299_000,
        "description": ""
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

LESSON = [
    {
        "uuid": uuid.uuid4().bytes,
        "title": "ReactJS là gì? Tại sao nên học ReactJS?",
        "duration": 641,
        "content": "",
        "chapter_id": 1,
        "author_id": 1
    },
    {
        "uuid": uuid.uuid4().bytes,
        "title": "SPA/MPA là gì?",
        "duration": 1340,
        "content": "",
        "chapter_id": 1,
        "author_id": 1
    }
]

def import_data(db):
    user = User(
        username="user",
        password=hash_password("123"),
        email="test@codeheroes.com", name="Test User"
    )
    db.session.add(user)
    db.session.commit()

    for course in COURSES:
        course_obj = Course(name=course["name"], price=course["price"], description=course["description"])
        db.session.add(course_obj)
        db.session.commit()

    for chapter in CHAPTERS:
        chapter_obj = Chapter(name=chapter["name"], course_id=chapter["course_id"])
        db.session.add(chapter_obj)
        db.session.commit()

    for lesson in LESSON:
        lesson_obj = Lesson(
            uuid=lesson["uuid"],
            title=lesson["title"],
            duration=lesson["duration"],
            content=lesson["content"],
            chapter_id=lesson["chapter_id"],
            author_id=lesson["author_id"]
        )
        db.session.add(lesson_obj)
        db.session.commit()
