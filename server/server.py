from flask import Flask
from flask_cors import CORS, cross_origin
from controllers.analysis_controller import analysis_controller
from controllers.history_controller import history_controller
import logging



app = Flask(__name__)
CORS(app)

logging.basicConfig(
    level=logging.INFO,  # A log szintjét itt tudod beállítani (DEBUG, INFO, WARNING, ERROR)
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"  # Log üzenet formátuma
)

app.register_blueprint(analysis_controller, url_prefix="/api")
app.register_blueprint(history_controller, url_prefix="/api")

if __name__ == '__main__':
   
   app.run(debug=True)