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
    def getComments(cls, limit=None, offset=None, sort=None):
        order_by = cls.id.desc() if sort == "desc" else cls.id.asc()

        result = []
        for instance in db_session.query(cls).order_by(order_by).limit(limit).offset(offset):
            temp = instance.__dict__
            temp.pop('_sa_instance_state', None)
            result.append(temp)

        return result

    @classmethod
    def postComments(cls, comment):
        comment["avatar"] = "bunny"

        try:
            db_session.add(cls(**comment))
            db_session.commit()

            return None
        except Exception as e:
            print(e)

            return "Error"
