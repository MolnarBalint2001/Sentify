



"""
Mini analysis model result DTO
"""
class MiniAnalysisResult:

    def __init__(self, prediction, sentiment, text, execution_time):
        self.prediction = prediction
        self.sentiment = sentiment
        self.text = text
        self.execution_time = execution_time

    

    def to_dict(self) -> dict:
        return {
            "execution_time": self.execution_time,
            "text": self.text,
            "prediction": str(self.prediction),
            "sentiment": self.sentiment,
        }