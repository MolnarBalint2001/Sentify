
from transformers import pipeline
from data_transfer_object.analysis_result import TextResult, Sentiment, AnalysisResult
from collections import Counter
from typing import List

#[{'label': '1 star', 'score': 0.9581254720687866}]

class SentimentAnalyzerService:

    def __init__(self):
        self.model = pipeline("sentiment-analysis", model="nlptown/bert-base-multilingual-uncased-sentiment")
        

    def analyze_corpus(self,corpus:str) -> TextResult:

        result = self.model(corpus)
        label = result[0]["label"]
        text_result = TextResult()

        match label:
            case "1 star":
                text_result.text=corpus
                text_result.sentiment = Sentiment.NEGATIVE_PLUS
            case "2 stars":
                text_result.text=corpus
                text_result.sentiment = Sentiment.NEGATIVE
            case "3 stars":
                text_result.text=corpus
                text_result.sentiment = Sentiment.NEUTRAL
            case "4 stars":
                text_result.text=corpus
                text_result.sentiment = Sentiment.POSITIVE
            case "5 stars":
                text_result.text=corpus
                text_result.sentiment = Sentiment.POSITIVE_PLUS
   
        return text_result


    def batch_analysis(self, corpus_list:List[str]) -> List[TextResult]:
        #analysis_result = AnalysisResult()
        results = []
        for corpus in corpus_list:
            maximized_corpus = corpus[:512] 
            result = self.analyze_corpus(maximized_corpus)
            results.append(result)
    
        counted = Counter(result.sentiment.name for result in results)
        """analysis_result.text_results = text_results
        analysis_result.nn_count = counted[Sentiment.NEGATIVE_PLUS.name]
        analysis_result.n_count = counted[Sentiment.NEGATIVE.name]
        analysis_result.neu_count = counted[Sentiment.NEUTRAL.name]
        analysis_result.p_count = counted[Sentiment.POSITIVE.name]
        analysis_result.pp_count = counted[Sentiment.POSITIVE_PLUS.name]"""

        return results

