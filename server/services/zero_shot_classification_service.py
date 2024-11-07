
from transformers import pipeline
from typing import List

class ZeroShotClassificationService():

    def __init__(self):        
        self.classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
        self.candidate_labels = [
            "Negative",
            "Positive",
            "Interrogative",
            "Imperative",
            "Corrective",
            "Miscellaneous"
        ]


    def classification(self, corpus_list:List[str]):
        result = self.classifier(corpus_list, self.candidate_labels)
    
        processed_result = []
        for x in result:
            pr = dict()
            pr["sequence"] = x["sequence"]
            pr["label"] = x["labels"][0]
            pr["sentiment"]
            processed_result.append(pr)
        return processed_result
    

    def create_grouped(self):
        classification_result = self.classification()
        grouped = dict()
        for x in classification_result:
            if x["label"] not in grouped:
                grouped[x["label"]] = []
                grouped[x["label"]].append(x)
            else:
                grouped[x["label"]].append(x)


