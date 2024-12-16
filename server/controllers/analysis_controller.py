
from flask import Blueprint, jsonify, request
from services.analysis_service import AnalysisService
from services.mini_analysis_service import MiniAnalysisService
from data_transfer_object.mini_analysis_result import MiniAnalysisResult
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
        analysis_result = analysis_service.analyze_website(url=url)
        end_time = time.time()
        elapsed_time = end_time - start_time
       
        analysis_result.execution_time = elapsed_time

        return jsonify({"result" : analysis_result.to_dict()})
    except:

        return jsonify({"error", "Something went wrong."}), 400

    

@analysis_controller.route("/mini-analyze", methods=["POST"])
def mini_analyze():

    try:
        start_time = time.time()

        data = request.json
        text = data.get("text")
        logger.debug(f"Mini analyze in the API layer: text={text}")

        mini_analysis_service = MiniAnalysisService()
        sentiment, prediction, text = mini_analysis_service.predict_sentiment(text=text)
    
        end_time = time.time()
        elapsed_time = end_time - start_time

        logger.debug(f"Elapsed time: {elapsed_time}")

        result_dto = MiniAnalysisResult(sentiment=sentiment, prediction=prediction, text=text, execution_time=elapsed_time)

        return jsonify({"result" : result_dto.to_dict()})
    except:
        return jsonify({"error", "Something went wrong."}), 400






