from datetime import datetime

from flask import jsonify, request
from sqlalchemy import and_, delete, or_, select, update
from flask_jwt_extended import jwt_required, get_jwt_identity

from src import db
from src.models import Blog, BlogComment


class Controller:
    @staticmethod
    def all():
        rows = db.session.execute(select(Blog)).all()
        return jsonify([blog[0].as_dict() for blog in rows]), 200

    @staticmethod
    def one(id: int):
        stmt = select(Blog).where(Blog.id == id)
        blog = db.session.execute(stmt).first()
        if blog is None:
            return jsonify({"message": "Blog ID not exist"}), 404
        return jsonify(blog[0].as_dict()), 200

    @staticmethod
    @jwt_required()
    def create():
        data = request.get_json()
        title = data.get("title", "")
        content = data.get("content", "")

        identity = get_jwt_identity()

        blog = Blog(title=title, content=content,
                    create_time=datetime.now(), author_id=identity["id"])
        db.session.add(blog)
        db.session.commit()
        return jsonify({"message": "Create Blog successfully"}), 201

    @staticmethod
    @jwt_required()
    def update_partial(id: int):
        data = request.get_json()
        identity = get_jwt_identity()

        stmt = update(Blog).where(and_(Blog.id == id, Blog.author_id == identity["id"])).values(**data)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Update Blog successfully"}), 200

    @staticmethod
    @jwt_required()
    def delete(id: int):
        identity = get_jwt_identity()
        stmt = delete(Blog).where(and_(Blog.id == id, Blog.author_id == identity["id"]))
        db.session.execute(stmt)
        db.session.commit()
        return jsonify({"message": "Delete Blog successfully"}), 200

    @staticmethod
    def all_comments(id: int):
        stmt = select(Blog).where(Blog.id == id)

        blog = db.session.execute(stmt).first()
        if blog is None:
            return jsonify({"message": "Blog ID does not exist"})

        return jsonify([comment.as_dict() for comment in blog[0].comments]), 200

    @staticmethod
    @jwt_required()
    def create_comment(id: int):
        stmt = select(Blog).where(Blog.id == id)
        blog = db.session.execute(stmt).first()
        if blog is None:
            return jsonify(msg="Blog ID does not exist")

        identity = get_jwt_identity()
        data = request.get_json()
        content = data.get("content", "")
        parent_id = data.get("parent_id", None)

        comment = BlogComment(content=content, parent_id=parent_id,
                              user_id=identity["id"], blog_id=blog[0].id,
                              create_time=datetime.now())
        db.session.add(comment)
        db.session.commit()
        return jsonify(msg="Create Comment successfully"), 200

    @staticmethod
    @jwt_required()
    def delete_comment(id: int, comment_id: int):
        identity = get_jwt_identity()
        stmt = delete(BlogComment).where(or_(
            and_(BlogComment.id == comment_id,
                 BlogComment.user_id == identity["id"]),
            BlogComment.parent_id == comment_id
        ))
        db.session.execute(stmt)
        db.session.commit()
        return jsonify(msg="Delete Comment successfully"), 200

    @staticmethod
    @jwt_required()
    def update_comment(uuid: str, comment_id: int):
        identity = get_jwt_identity()
        data = request.get_json()
        content = data.get("content", "")
        stmt = update(BlogComment) \
            .where(and_(BlogComment.id == comment_id,
                        BlogComment.user_id == identity["id"])) \
            .values(content=content)
        db.session.execute(stmt)
        db.session.commit()
        return jsonify(msg="Update Comment successfully"), 200
