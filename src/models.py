from abc import abstractmethod
import enum
import uuid
from datetime import datetime
from typing import Any, List, Optional

from sqlalchemy import Column, ForeignKey, String, Table, BINARY, MetaData
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy.types import Text
from sqlalchemy.ext.orderinglist import ordering_list


class UserRole(enum.IntEnum):
    ADMIN = 1
    USER = 2


class Base(DeclarativeBase):
    __abstract__ = True

    @abstractmethod
    def as_dict(self, *attrs) -> dict[str, Any]:
        pass

class BaseModel(Base):
    __abstract__ = True

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)

    def as_dict(self, *attrs) -> dict[str, Any]:
        return { "id": self.id }


class PostModel(BaseModel):
    __abstract__ = True

    title: Mapped[str] = mapped_column(String(255))
    video_url: Mapped[Optional[str]] = mapped_column(String(255))
    duration: Mapped[Optional[int]]
    content = mapped_column(Text)
    create_time: Mapped[datetime]

    @abstractmethod
    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "id": self.id,
            "title": self.title,
            "video_url": self.video_url,
            "duration": self.duration,
            "content": self.content,
            "create_time": self.create_time,
        }
        return data


class Enrollment(Base):
    __tablename__ = "enrollment"

    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), primary_key=True)
    course_id: Mapped[int] = mapped_column(ForeignKey("course.id"), primary_key=True)
    start_date: Mapped[datetime]
    finish_date: Mapped[Optional[datetime]]
    score: Mapped[Optional[int]]

    user: Mapped["User"] = relationship(back_populates="courses")
    course: Mapped["Course"] = relationship(back_populates="users")

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "course_id": self.course_id
        }
        return data


class Progress(Base):
    __tablename__ = "progress"

    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), primary_key=True)
    lesson_id: Mapped[int] = mapped_column(ForeignKey("lesson.id"), primary_key=True)
    course_id: Mapped[int] = mapped_column(ForeignKey("course.id"))
    completed: Mapped[bool] = mapped_column(default=False)
    completed_at: Mapped[Optional[datetime]]

    user: Mapped["User"] = relationship(back_populates="lesson_progress")
    lesson: Mapped["Lesson"] = relationship(back_populates="user_progress")


class ProgressScore(Base):
    __tablename__ = "tracking"

    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), primary_key=True)
    lesson_id: Mapped[int] = mapped_column(ForeignKey("lesson.id"), primary_key=True)
    score: Mapped[int]
    completed_at: Mapped[datetime] = mapped_column(primary_key=True)

    user: Mapped["User"] = relationship(back_populates="lesson_tracking")
    lesson: Mapped["Lesson"] = relationship(back_populates="user_tracking")

    def as_dict(self, *attrs) -> dict[str, Any]:
        return {
            "score": self.score,
            "completed_at": self.completed_at
        }


Reaction = Table(
    "reaction",
    Base.metadata,
    Column("user_id", ForeignKey("user.id"), primary_key=True),
    Column("comment_id", ForeignKey("comment.id"), primary_key=True)
)


BlogTag = Table(
    "blog_tag",
    Base.metadata,
    Column("blog_id", ForeignKey("blog.id"), primary_key=True),
    Column("tag_id", ForeignKey("tag.id"), primary_key=True)
)

CourseTag = Table(
    "course_tag",
    Base.metadata,
    Column("course_id", ForeignKey("course.id"), primary_key=True),
    Column("tag_id", ForeignKey("tag.id"), primary_key=True)
)

class LearningObjective(BaseModel):
    __tablename__ = "learning_objective"

    name: Mapped[str] = mapped_column(String(255))

    course_id: Mapped[int] = mapped_column(ForeignKey("course.id"))

    def as_dict(self, *attrs) -> dict[str, Any]:
        return {
            "name": self.name
        }


class Tag(BaseModel):
    __tablename__ = "tag"

    name: Mapped[str] = mapped_column(String(50))

    blogs: Mapped[List["Blog"]] = relationship(secondary=BlogTag, back_populates="tags")
    courses: Mapped[List["Course"]] = relationship(secondary=CourseTag, back_populates="tags")

    def __repr__(self) -> str:
        return f"Tag(id={self.id}, name={self.name})"

    def as_dict(self, *attrs) -> dict[str, Any]:
        return {
            "id": self.id,
            "name": self.name
        }


class Blog(PostModel):
    __tablename__ = "blog"

    img_url: Mapped[Optional[str]] = mapped_column(String(255))
    author_id: Mapped[int] = mapped_column(ForeignKey("user.id"))

    user: Mapped["User"] = relationship(back_populates="blogs")
    tags: Mapped[List[Tag]] = relationship(secondary=BlogTag, back_populates="blogs")
    comments: Mapped[List["BlogComment"]] = relationship(back_populates="blog")

    def as_dict(self, *attrs) -> dict[str, Any]:
        return {
            **super().as_dict(*attrs),
            "user": self.user.as_dict(),
            "tags": self.tags
        }


class Comment(BaseModel):
    __tablename__ = "comment"

    content = mapped_column(Text, nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    lesson_id: Mapped[int] = mapped_column(ForeignKey("lesson.id"))
    parent_id: Mapped[Optional[int]] = mapped_column(index=True)
    create_time: Mapped[datetime]

    user: Mapped["User"] = relationship(back_populates="comments")
    lesson: Mapped["Lesson"] = relationship(back_populates="comments")

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "id": self.id,
            "content": self.content,
            "user": self.user.as_dict(),
            "parent_id": self.parent_id,
            "create_time": self.create_time
        }
        return data


class BlogComment(BaseModel):
    __tablename__ = "blog_comment"

    content = mapped_column(Text, nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"))
    blog_id: Mapped[int] = mapped_column(ForeignKey("blog.id"))
    parent_id: Mapped[Optional[int]] = mapped_column(index=True)
    create_time: Mapped[datetime]

    user: Mapped["User"] = relationship(back_populates="blog_comments")
    blog: Mapped["Blog"] = relationship(back_populates="comments")

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "id": self.id,
            "content": self.content,
            "user": self.user.as_dict(),
            "parent_id": self.parent_id,
            "create_time": self.create_time
        }
        return data


class User(BaseModel):
    __tablename__ = "user"

    username = Column(String(20), index=True, unique=True)
    password = Column(String(100))
    email = Column(String(255), unique=True)
    name = Column(String(100))
    avatar = Column(String(255)) # default="http://localhost:5000/static/img/default-avt.jpg"
    is_active: Mapped[bool] = mapped_column(default=True)
    create_time: Mapped[datetime] = mapped_column(default=datetime.now())
    phone = Column(String(20))
    role: Mapped[UserRole] = mapped_column(default=UserRole.USER)

    blogs: Mapped[List[Blog]] = relationship(back_populates="user")
    courses: Mapped[List[Enrollment]] = relationship(back_populates="user")
    comments: Mapped[List[Comment]] = relationship(back_populates="user")
    blog_comments: Mapped[List[BlogComment]] = relationship(back_populates="user")
    lesson_progress: Mapped[List[Progress]] = relationship(back_populates="user")
    lesson_tracking: Mapped[List[ProgressScore]] = relationship(back_populates="user")

    def __repr__(self) -> str:
        return f"User(id={self.id}, username={self.username})"

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "username": self.username,
            "email": self.email,
            "name": self.name,
            "avatar": self.avatar,
            "phone": self.phone,
            "role": self.role
        }
        return data


class Choice(BaseModel):
    __tablename__ = "choice"

    content: Mapped[str] = mapped_column(String(255))
    is_correct: Mapped[bool] = mapped_column(default=False)
    explanation = mapped_column(Text)
    question_id: Mapped[int] = mapped_column(ForeignKey("question.id", ondelete="CASCADE"))

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
            "explanation": self.explanation
        }
        return data


class Question(BaseModel):
    __tablename__ = "question"

    content: Mapped[str] = mapped_column(String(255))
    score: Mapped[int] = mapped_column(default=1)
    lesson_id: Mapped[int] = mapped_column(ForeignKey("lesson.id", ondelete="CASCADE"))

    choices: Mapped[List[Choice]] = relationship(backref="question", cascade="all, delete")

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "id": self.id,
            "content": self.content,
            "score": self.score,
            "choices": [choice.as_dict() for choice in self.choices]
        }
        return data


class Lesson(PostModel):
    __tablename__ = "lesson"

    uuid: Mapped[bytes] = mapped_column(BINARY(16), index=True, unique=True)
    order: Mapped[int]
    chapter_id: Mapped[int] = mapped_column(ForeignKey("chapter.id", ondelete="CASCADE"))

    questions: Mapped[List[Question]] = relationship(backref="lesson", cascade="all, delete")
    user_progress: Mapped[List[Progress]] = relationship(back_populates="lesson")
    comments: Mapped[List[Comment]] = relationship(back_populates="lesson")
    blog_comments: Mapped[List[BlogComment]] = relationship(back_populates="lesson")
    user_tracking: Mapped[List[ProgressScore]] = relationship(back_populates="lesson")


    def __repr__(self) -> str:
        return f"Lesson(id={self.id}, uuid={self.uuid}, title={self.title})"

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            **super().as_dict(*attrs),
            "uuid": uuid.UUID(bytes=self.uuid),
            "questions": [question.as_dict() for question in self.questions]
        }
        return data


class Chapter(BaseModel):
    __tablename__ = "chapter"

    name: Mapped[str] = mapped_column(String(255))
    order: Mapped[int]
    course_id: Mapped[int] = mapped_column(ForeignKey("course.id", ondelete="CASCADE"))

    lessons: Mapped[List[Lesson]] = relationship(backref="chapter", cascade="all, delete",
                                                 collection_class=ordering_list("order"),
                                                 order_by=Lesson.order)

    def __repr__(self) -> str:
        return f"Chapter(id={self.id}, name={self.name})"

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "id": self.id,
            "name": self.name
        }
        for attr in attrs:
            match attr:
                case "lessons":
                    data["lessons"] = [lesson.as_dict() for lesson in self.lessons]
                case "course_id":
                    data["course_id"] = self.course_id
                case "lessons_count":
                    data["lessons_count"] = len(self.lessons)
        return data


class Course(BaseModel):
    __tablename__ = "course"

    name: Mapped[str] = mapped_column(String(255))
    price: Mapped[int] = mapped_column(default=0)
    img_url: Mapped[Optional[str]] = mapped_column(String(255))
    description = mapped_column(Text)

    objectives: Mapped[List[LearningObjective]] = relationship(backref="course")
    chapters: Mapped[List[Chapter]] = relationship(backref="course", cascade="all, delete",
                                                   collection_class=ordering_list("order"),
                                                   order_by=Chapter.order)
    users: Mapped[List[Enrollment]] = relationship(back_populates="course")
    tags: Mapped[List[Tag]] = relationship(secondary=CourseTag, back_populates="courses")

    def __repr__(self) -> str:
        return f"Course(id={self.id}, name={self.name})"

    def as_dict(self, *attrs) -> dict[str, Any]:
        data = {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "tags": [tag.as_dict() for tag in self.tags]
        }
        for attr in attrs:
            match attr:
                case "img_url":
                    data["img_url"] = self.img_url
                case "chapters":
                    data["chapters"] = [chapter.as_dict("lessons_count") for chapter in self.chapters]
                case "users":
                    data["users"] = self.users
                case "users_count":
                    data["users_count"] = len(self.users)
                case "objectives":
                    data["objectives"] = [obj.name for obj in self.objectives]
                case "description":
                    data["description"] = self.description
        return data

if __name__ == "__main__":
    from . import app, db
    from .import_data import import_data

    with app.app_context():
        print("Drop all")
        m = MetaData()
        m.reflect(db.engine)
        m.drop_all(db.engine)

        print("Create all")
        Base.metadata.create_all(bind=db.engine)

        print("Importing data")
        import_data(db)
