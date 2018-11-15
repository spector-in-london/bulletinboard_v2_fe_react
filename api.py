from flask import jsonify

api_res_type = {
    "success": "success",
}

def api_response(status, data=None, message=None):
    response = {
        "status": status if status else api_res_type['success'],
        "data": data,
        "message": message
    }

    return jsonify(response)

