from flask import Flask
from flask_cors import CORS, cross_origin
from controllers.analysis_controller import analysis_controller
from controllers.history_controller import history_controller
import logging
from flask_sqlalchemy import SQLAlchemy
from database import db


def create_app():

    # Initializing Flask webserver
    app = Flask(__name__)

    # Enable CORS
    CORS(app)


    # Database initialization
   
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)


    # Logger base configartion
    logging.basicConfig(
        level=logging.DEBUG,  
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    )

    # Register controllers
    app.register_blueprint(analysis_controller, url_prefix="/api")
    app.register_blueprint(history_controller, url_prefix="/api")

    # Create tables
    with app.app_context():
        db.create_all()

    return app

