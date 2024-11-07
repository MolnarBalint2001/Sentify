
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from sklearn.cluster import DBSCAN
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, pipeline

class SimilarityClusteringService:

    def __init__(self,documents) -> None:
        self.documents = documents
        self.vectorizer = TfidfVectorizer()
        self.tfidf_matrix = self.vectorizer.fit_transform(documents)

    def similarity_matrix(self):
        return cosine_similarity(self.tfidf_matrix)

    def cluster_corpus(self):
        dbscan = DBSCAN(metric="cosine", eps=0.25, min_samples=1)
        sim_mat = self.similarity_matrix()
        print(sim_mat)
        distance_mat = np.maximum(1 - sim_mat, 0)

        labels = dbscan.fit_predict(distance_mat)
        clusters = {}
        for idx, label in enumerate(labels):
            if label not in clusters:
                clusters[label] = []
            clusters[label].append(self.documents[idx])

        print("Kommentek csoportosítva:")
        for cluster_id, group in clusters.items():
            print(f"Csoport {cluster_id}:")
            for comment in group:
                print(f"  - {comment}")




   