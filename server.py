from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello Cruel World"

@app.route("/api/comments/", methods=["GET", "POST"])
def comments():
    if request.method == "POST":
        return ""
    else:
        response = [
            { "id": 1, "title": "title", "body": "body", "date": "11-11-2018" },
            { "id": 2, "title": "title", "body": "body", "date": "11-11-2018" },
            { "id": 3, "title": "title", "body": "body", "date": "11-11-2018" },
        ]
        return jsonify(response)

