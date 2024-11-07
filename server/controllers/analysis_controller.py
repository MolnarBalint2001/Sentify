
from flask import Blueprint, jsonify, request
from services.analysis_service import AnalysisService
import time
import logging

logger = logging.getLogger("analysis_controller")
logger.setLevel(logging.DEBUG)

analysis_controller = Blueprint('analysis_controller', __name__)

@analysis_controller.route("/analyze", methods=["POST"])
def analyze():
    """
        Analysis controller
        
        Handling http request
        Responsens:
            200 - Success, analysis result of the webscrape process
            400 - Error, exception occured the the analysis process
    """
    try:
        logger.debug("Analysis in the API layer.")
        start_time = time.time()
        data = request.json
        url = data.get("url")

        logger.debug(f"URL: {url}")

        analysis_service = AnalysisService()
        r = analysis_service.analyze_website(url=url)
        end_time = time.time()
        elapsed_time = end_time - start_time
       
        #analysis_result.execution_time = elapsed_time

        #return jsonify({"result" : analysis_result.to_dict()})
        return jsonify({"result" : r})
    except:

        return jsonify({"error", "Something went wrong."}), 400

    










