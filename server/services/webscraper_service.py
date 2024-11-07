
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from services import sentiment_analyzer_service
from data_transfer_object.analysis_result import AnalysisResult
import logging
import time

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)


delay = 20
PATH = r"C:\Program Files (x86)\chromedriver.exe"
service = Service(executable_path=PATH)
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-gpu")
driver = webdriver.Chrome(service=service, options=chrome_options)  # GPU használatának letiltása (ajánlott)

class WebScraperService:

    def __init__(self):
        self.driver = webdriver.Chrome(service=service, options=chrome_options)# GPU használatának letiltása (ajánlott)
        logger.debug(f"Initialize WebScrapeService: PATH={PATH}, delay={delay} options={chrome_options}")

    def webscrape(self, url: str):
        
        self.driver.get(url=url)

        self.scroll_down()

        comment_elements = []
        try:
            WebDriverWait(self.driver, delay).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, '#content:has(> yt-attributed-string > span.yt-core-attributed-string)'))
            )
    
        except:
            raise Exception("No element.")
       
        comment_elements = self.driver.find_elements(by=By.CSS_SELECTOR, value="#content:has(> yt-attributed-string > span.yt-core-attributed-string)")
        comment_texts = [ce.text for ce in comment_elements]
        return comment_texts

        



    def scroll_down(self, times=3):
        for _ in range(times):
            self.driver.find_element(By.TAG_NAME, "body").send_keys(Keys.END)
            time.sleep(2)





