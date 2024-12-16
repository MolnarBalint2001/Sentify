

import tensorflow as tf
from tensorflow.keras.preprocessing.text import tokenizer_from_json
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
import json
import os


model_path = os.path.join(os.path.dirname(__file__), '../trained_models/sentiment_model_imdb.h5')
model_path = os.path.abspath(model_path)



tokenizer_path = os.path.join(os.path.dirname(__file__), '../trained_models/tokenizer.json')
tokenizer_path = os.path.abspath(tokenizer_path) 



class MiniAnalysisService:

    def __init__(self):
        self.model = load_model(model_path)

    def load_tokenizer(path=tokenizer_path):
        with open(tokenizer_path, "r", encoding="utf-8") as f:
            tokenizer_data = json.load(f)  # JSON objektum betöltése
            tokenizer_json = json.dumps(tokenizer_data)  # Visszaalakítás stringgé
        return tokenizer_from_json(tokenizer_json)
    
    def preprocess_single_text(self,text):
        # Szöveg tisztítása
        text = tf.constant(text)
        text = tf.strings.lower(text)
        text = tf.strings.regex_replace(text, "[^a-z ]", "")
        return text.numpy().decode("utf-8")

    

    def predict_sentiment(self, text):
        
        #Load tokenizer
        tokenizer = self.load_tokenizer()

        # Szöveg tisztítása és tokenizálása
        cleaned_text = self.preprocess_single_text(text)
        sequence = tokenizer.texts_to_sequences([cleaned_text])
        padded_sequence = pad_sequences(sequence, maxlen=200, padding="post", truncating="post")

        # Előrejelzés
        prediction = self.model.predict(padded_sequence)[0][0]
        sentiment = "Positive" if prediction > 0.5 else "Negative"
        return sentiment, prediction, text