

from models.history import History
from database import db
import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

def get_all_histories():
    logger.debug("Get all histories in DAL layer.")
    histories = History.query.all()
    logger.debug(f"History count: {len(histories)}")

    return histories


def add_history(url:str):
    logger.debug("Add history in DAL layer.")
    new_history = History(url=url)
    db.session.add(new_history)
    db.session.commit()
    return new_history


def delete_history(id:int):
    logger.debug("Delete history in DAL layer.")
    history = History.query.get(id)
    if not history:
        raise Exception("History not found!")
    
    db.session.delete(history)
    db.session.commit()
    return history.id