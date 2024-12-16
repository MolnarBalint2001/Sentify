
from services.webscraper_service import WebScraperService
from services.sentiment_analyzer_service import SentimentAnalyzerService
from services.zero_shot_classification_service import ZeroShotClassificationService
import logging
from data_transfer_object.analysis_result import AnalysisResult

logger = logging.getLogger("analysis_service")
logger.setLevel(logging.DEBUG)

class AnalysisService:

    def __init__(self):
        self.webscrape_service = WebScraperService()
        self.sentiment_analysis_service = SentimentAnalyzerService()
    

    def analyze_website(self, url:str):
    
        if url is None or url == "":
            raise Exception("URL is none!")
    
        logger.debug(f"Analyze website in the BLL layer: URL={url}")

        webscrape_result = self.webscrape_service.webscrape(url=url)
        logger.debug(f"Webscrape: {len(webscrape_result)} result.")

        sentiment_analysis_result = self.sentiment_analysis_service.batch_analysis(corpus_list=webscrape_result)
        logger.debug(f"Sentiment analysis: {len(sentiment_analysis_result.text_results)} result.")
        
        return sentiment_analysis_result




