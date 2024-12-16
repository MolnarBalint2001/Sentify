
from enum import Enum
from typing import List

"""
Sentiment of the corpus
"""
class Sentiment(Enum):
    NONE = 0,
    NEGATIVE_PLUS = 1
    NEGATIVE = 2
    NEUTRAL = 3
    POSITIVE = 4
    POSITIVE_PLUS = 5


"""
Individual analysis result of the given corpus
text: string -> corpus (text, word etc..)
result: Sentiment -> sentiment of the given corpus
"""
class TextResult:

    def __init__(self) -> None:
        self.sentiment = Sentiment.NONE
        self.text = ""

    @property
    def sentiment(self) -> Sentiment:
        return self._sentiment

    @sentiment.setter
    def sentiment(self, value: Sentiment) -> None:
        if not isinstance(value, Sentiment):
            raise TypeError("A result attribútumnak Sentiment típusúnak kell lennie.")
        self._sentiment = value

    @property
    def text(self) -> str:
        return self._text

    @text.setter
    def text(self, value: str) -> None:
        if not isinstance(value, str):
            raise TypeError("A text attribútumnak str típusúnak kell lennie.")
        self._text = value

    def to_dict(self):
        return {
            "sentiment": self.sentiment.name,
            "text": self.text
        }

    def __str__(self) -> str:
        return f"TextResult(sentiment={self.sentiment.name}, text='{self.text}')"


class ClassificationResult:


    def __init__(self, label, text_results):
        self.label = ""
        self.text_results = []


    def to_dict(self):
        return {
            "label" : self.label,
            "text_results": [result.to_dict() for result in self.text_results]
        }


"""
Complete analysis result 
"""
class AnalysisResult:
    def __init__(self) -> None:
        self._execution_time = 0
        self._nn_count = 0
        self._n_count = 0
        self._neu_count = 0
        self._p_count = 0
        self._pp_count = 0
        self.text_results = []


    @property
    def execution_time(self) -> float:
        return self._execution_time

    @execution_time.setter
    def execution_time(self, value: int) -> None:
        if not isinstance(value, float) or value < 0:
            raise ValueError("execution_time must be a non-negative integer.")
        self._execution_time = value

    @property
    def nn_count(self) -> int:
        return self._nn_count

    @nn_count.setter
    def nn_count(self, value: int) -> None:
        if not isinstance(value, int) or value < 0:
            raise ValueError("nn_count must be a non-negative integer.")
        self._nn_count = value

    @property
    def n_count(self) -> int:
        return self._n_count

    @n_count.setter
    def n_count(self, value: int) -> None:
        if not isinstance(value, int) or value < 0:
            raise ValueError("n_count must be a non-negative integer.")
        self._n_count = value

    @property
    def neu_count(self) -> int:
        return self._neu_count

    @neu_count.setter
    def neu_count(self, value: int) -> None:
        if not isinstance(value, int) or value < 0:
            raise ValueError("neu_count must be a non-negative integer.")
        self._neu_count = value

    @property
    def p_count(self) -> int:
        return self._p_count

    @p_count.setter
    def p_count(self, value: int) -> None:
        if not isinstance(value, int) or value < 0:
            raise ValueError("p_count must be a non-negative integer.")
        self._p_count = value

    @property
    def pp_count(self) -> int:
        return self._pp_count

    @pp_count.setter
    def pp_count(self, value: int) -> None:
        if not isinstance(value, int) or value < 0:
            raise ValueError("pp_count must be a non-negative integer.")
        self._pp_count = value

    @property
    def text_results(self) -> List["TextResult"]:
        return self._text_results

    @text_results.setter
    def text_results(self, value: List["TextResult"]) -> None:
        if not isinstance(value, list):
            raise TypeError("text_results must be a list of TextResult objects.")
        self._text_results = value

    def to_dict(self) -> dict:
        return {
            "execution_time": self.execution_time,
            "nn_count": self.nn_count,
            "n_count": self.n_count,
            "neu_count": self.neu_count,
            "p_count": self.p_count,
            "pp_count": self.pp_count,
            "text_results": [result.to_dict() for result in self.text_results]
        }

    def __str__(self) -> str:
        return (
            f"AnalysisResult(execution_time={self.execution_time} ms, "
            f"nn_count={self.nn_count}, n_count={self.n_count}, neu_count={self.neu_count}, "
            f"p_count={self.p_count}, pp_count={self.pp_count}, "
            f"text_results=[{', '.join(str(result) for result in self.text_results)}])"
        )
    


