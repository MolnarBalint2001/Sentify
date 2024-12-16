


from flask_sqlalchemy import SQLAlchemy
from database import db
import json
from datetime import datetime

class History(db.Model):

    __tablename__ = "history"
    id = db.Column(db.Integer, primary_key=True)
    activity = db.Column(db.String)
    created = db.Column(db.DateTime, default=datetime.now, nullable=False)


    def __dict__(self):
        return vars(self)

    def __repr__(self) -> str:
        return f"<History id={self.id} url={self.url}>"
    


