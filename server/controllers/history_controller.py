
from flask import Blueprint, jsonify, request
from services.analysis_service import AnalysisService
import time
import logging
from repositories import history_repository

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

history_controller = Blueprint('history_controller', __name__)



@history_controller.route("/history", methods=["GET"])
def get_all_histories():
    try:
        logger.debug("Get histories in the API layer.")
      
        histories = history_repository.get_all_histories()
        return jsonify({"histories":histories})
    except:
        return jsonify({"error", "Something went wrong."}), 400

@history_controller.route("/history", methods=["DELETE"])
def delete_history():
    try:
        logger.debug("Delete history in the API layer.")
        id = request.args.get("id")
        history_repository.delete_history(id)

    except:
        return jsonify({"error", "Something went wrong."}), 400


@history_controller.route("/history", methods=["POST"])
def add_history():
    try:
        logger.info("Add history in the API layer.")
        data = request.json
        url = data.get("url")
        saved_history = history_repository.add_history(url=url)
        data = {"history": saved_history.__dict__}
        return jsonify(data, status=200, mimetype="application/json")
    except:
        return jsonify({"error", "Something went wrong."}), 400








