from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello Cruel World"

@app.route("/api/comments/", methods=["POST"])
def postComments():
    print(request.get_json())
    response = {
        "status": "success",
        "data": None,
        "message": None,
    }
    return jsonify(response), 200

@app.route("/api/comments/", methods=["GET"])
def getComments():
    comments = [
        { "id": 1, "title": "title", "body": "body", "date": "11-11-2018" },
        { "id": 2, "title": "title", "body": "body", "date": "11-11-2018" },
        { "id": 3, "title": "title", "body": "body", "date": "11-11-2018" },
    ]

    response = {
        "status": "success",
        "data": { "comments": comments },
        "message": None,
    }

    return jsonify(response), 200
