from flask import Flask, request
from api import api_response, api_res_type
from database import init_db, db_session
from models import Post
from json import dumps

app = Flask(__name__)
init_db()

@app.route("/")
def hello():
    return "Hello Cruel World"

@app.route("/api/comments", methods=["GET"])
def getComments():
    offset = request.args.get("offset")
    offset = int(offset)

    data = {
        "comments": Post.getComments(4, offset * 4)
    }

    return api_response(api_res_type["success"], data), 200

@app.route("/api/comments/", methods=["POST"])
def postComments():
    comment = request.get_json()
    error = Post.postComments(comment)

    if error:
        res_type = api_res_type["error"]
    else:
        res_type = api_res_type["success"]

    return api_response(res_type), 200

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove
