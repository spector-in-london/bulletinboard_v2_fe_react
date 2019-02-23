from sqlalchemy import Table, Column, Integer, String
from database import Base, db_session

class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    title = Column(String(100))
    body = Column(String)
    avatar = Column(String(30))
    name = Column(String(30))

    @classmethod
    def getComments(cls, limit=None, offset=None):
        result = []
        for instance in db_session.query(cls).limit(limit).offset(offset):
            temp = instance.__dict__
            temp.pop('_sa_instance_state', None)
            result.append(temp)

        return result
