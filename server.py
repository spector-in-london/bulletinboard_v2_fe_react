from flask import Flask, request
from api import api_response, api_res_type
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello Cruel World"

@app.route("/api/comments/", methods=["POST"])
def postComments():
    print(request.get_json())
    return api_response(api_res_type["success"]), 200

@app.route("/api/comments/", methods=["GET"])
def getComments():
    data = {
        "comments": [
            { "id": 1, "title": "title", "body": "body", "date": "11-11-2018" },
            { "id": 2, "title": "title", "body": "body", "date": "11-11-2018" },
            { "id": 3, "title": "title", "body": "body", "date": "11-11-2018" },
        ]
    }

    return api_response(api_res_type["success"], data), 200
