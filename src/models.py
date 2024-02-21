from abc import abstractmethod
import enum
import uuid
from datetime import datetime
from typing import Any, List, Optional

from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Table, BINARY, text
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy.types import Text

from . import app, db


class UserRole(enum.Enum):
    ADMIN = 1
    USER = 2


class BaseModel(DeclarativeBase):
    __abstract__ = True

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)

    @abstractmethod
    def as_dict(self, *attrs) -> dict[str, Any]:
        pass


Enrollment = Table(
    "user_enroll_course",
    BaseModel.metadata,
    Column("user_id", ForeignKey("user.id"), primary_key=True),
    Column("course_id", ForeignKey("course.id"), primary_key=True),
    Column("start_date", DateTime, nullable=False, default=datetime.now()),
    Column("finish_date", DateTime),
    Column("score", Integer)
)

Progress = Table(
    "progress",
    BaseModel.metadata,
    Column("user_id", ForeignKey("user.id"), primary_key=True),
    Column("lesson_id", ForeignKey("lesson.id"), primary_key=True),
    Column("completed", Boolean, nullable=False, default=False)
)

Reaction = Table(
    "reaction",
    BaseModel.metadata,
    Column("user_id", ForeignKey("user.id"), primary_key=True),
    Column("comment_id", ForeignKey("comment.id"), primary_key=True)
)


class Comment(BaseModel):
    __tablename__ = "comment"

    content = mapped_column(Text, nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    lesson_id: Mapped[int] = mapped_column(ForeignKey("lesson.id"))
    parent_id: Mapped[Optional[int]] = mapped_column(ForeignKey("comment.id"), index=True)
    create_time: Mapped[datetime] = mapped_column(default=datetime.now())

    user_reactions: Mapped[List["User"]] = relationship("User", secondary=Reaction, back_populates="comments")


class User(BaseModel):
    __tablename__ = "user"

    username = Column(String(20), unique=True)
    password = Column(String(100))
    email = Column(String(255), unique=True)
    name = Column(String(100))
    avatar = Column(String(255)) # default="http://localhost:5000/static/img/default-avt.jpg"
    is_active: Mapped[bool] = mapped_column(default=True)
    create_time: Mapped[datetime] = mapped_column(default=datetime.now())
    phone = Column(String(20))
    role: Mapped[UserRole] = mapped_column(default=UserRole.USER)

    courses: Mapped[List["Course"]] = relationship("Course", secondary=Enrollment, back_populates="users")
    lessons: Mapped[List["Lesson"]] = relationship("Lesson", secondary=Progress, back_populates="users")
    comments: Mapped[List["Comment"]] = relationship("Comment", secondary=Reaction, back_populates="user_reactions")

    def __repr__(self) -> str:
        return f"User(id={self.id!r}, username={self.username!r})"


class Choice(BaseModel):
    __tablename__ = "choice"

    content: Mapped[str] = mapped_column(String(255))
    is_correct: Mapped[bool] = mapped_column(default=False)
    question_id: Mapped[int] = mapped_column(ForeignKey("question.id"))

    def __repr__(self) -> str:
        return ("Choice("
            f"id={self.id},"
            f"content={self.content},"
            f"is_correct={self.is_correct},"
            f"question_id={self.question_id}\n)")

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "id": self.id,
            "content": self.content,
            "is_correct": self.is_correct,
            "question_id": self.question_id
        }
        return data


class Question(BaseModel):
    __tablename__ = "question"

    content: Mapped[str] = mapped_column(String(255))
    score: Mapped[int] = mapped_column(default=1)
    lession_id: Mapped[int] = mapped_column(ForeignKey("lesson.id"))

    choices: Mapped[List[Choice]] = relationship(Choice, backref="question")

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "id": self.id,
            "content": self.content,
            "score": self.score,
            "lesson_id": self.lession_id,
            "choices": [choice.as_dict() for choice in self.choices]
        }
        return data


class Lesson(BaseModel):
    # post and lesson
    __tablename__ = "lesson"

    uuid = Column(BINARY(16), index=True, unique=True, default=uuid.uuid4().bytes)
    title: Mapped[str] = mapped_column(String(255))
    video_url: Mapped[Optional[str]] = mapped_column(String(255))
    duration: Mapped[Optional[int]]
    content = mapped_column(Text, nullable=False)
    create_time: Mapped[datetime] = mapped_column(default=datetime.now())
    chapter_id: Mapped[int] = mapped_column(ForeignKey("chapter.id"))
    author_id: Mapped[int] = mapped_column(ForeignKey("user.id"))

    users: Mapped[List[User]] = relationship(secondary=Progress, back_populates="lessons")
    questions: Mapped[List[Question]] = relationship(Question, backref="lesson")

    def __repr__(self) -> str:
        return f"Lesson(id={self.id}, uuid={self.uuid}, title={self.title})"

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "id": self.id,
            "uuid": uuid.UUID(bytes=self.uuid),
            "title": self.title,
            "video_url": self.video_url,
            "duration": self.duration,
            "content": self.content,
            "create_time": self.create_time,
            "chapter_id": self.chapter_id,
            "author_id": self.author_id,
            "questions": [question.as_dict() for question in self.questions]
        }
        return data


class Chapter(BaseModel):
    __tablename__ = "chapter"

    name: Mapped[str] = mapped_column(String(255))
    course_id: Mapped[int] = mapped_column(ForeignKey("course.id"))

    lessons: Mapped[List[Lesson]] = relationship(Lesson, backref="chapter")

    def __repr__(self) -> str:
        return f"Chapter(id={self.id}, name={self.name})"

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "id": self.id,
            "name": self.name,
            "course_id": self.course_id
        }
        for attr in attrs:
            match attr:
                case "lessons":
                    data["lessons"] = [lesson.as_dict() for lesson in self.lessons]
        return data


class Course(BaseModel):
    __tablename__ = "course"

    name: Mapped[str] = mapped_column(String(255))
    price: Mapped[int] = mapped_column(default=0)
    description = mapped_column(Text)

    chapters: Mapped[List[Chapter]] = relationship(Chapter, backref="course")
    users: Mapped[List[User]] = relationship(secondary=Enrollment, back_populates="courses")

    def __repr__(self) -> str:
        return f"Course(id={self.id}, name={self.name})"

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "description": self.description
        }
        for attr in attrs:
            match attr:
                case "chapters":
                    data["chapters"] = [chapter.as_dict() for chapter in self.chapters]
                case "users":
                    data["users"] = self.users
        return data

if __name__ == "__main__":
    with app.app_context():
        # Create all
        conn = db.engine.connect()
        for table in reversed(BaseModel.metadata.sorted_tables):
            stmt = text(f"ALTER TABLE {str(table)} AUTO_INCREMENT = 1")
            conn.execute(stmt)
            conn.commit()
            conn.execute(table.delete())
        conn.commit()
        conn.close()
        print("Drop all")
        db.drop_all()
        print("create all")
        BaseModel.metadata.create_all(bind=db.engine)

        print("importing data")
        from .import_data import import_data
        import_data(db)

        # Test
        # course = db.session.get(Course, 1)
        # print(course)
        # for chapter in course.chapters:
        #     print(chapter.as_dict())

