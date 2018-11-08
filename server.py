from flask import Flask, request
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello Cruel World"

@app.route("/api/comments", methods=["GET", "POST"])
def comments():
    if request.method == "POST":
        return ""
    else:
        return "Comments"

