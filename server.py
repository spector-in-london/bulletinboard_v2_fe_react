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

@app.route("/api/comments/", methods=["POST"])
def postComments():
    print(request.get_json())
    return api_response(api_res_type["success"]), 200

@app.route("/api/comments/", methods=["GET"])
def getComments():

    result = []
    for instance in db_session.query(Post).limit(4):
        temp = instance.__dict__
        temp.pop('_sa_instance_state', None)
        result.append(temp)

    data = {
        "comments": result
    }

    return api_response(api_res_type["success"], data), 200

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove
