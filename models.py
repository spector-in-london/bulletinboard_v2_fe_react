from sqlalchemy import Table, Column, Integer, String
from database import Base

class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    title = Column(String(100))
    body = Column(String)
    avatar = Column(String(30))
    name = Column(String(30))
