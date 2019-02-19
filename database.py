from sqlalchemy import create_engine,
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

db_string = 'postgres://localhost:5432:bulletinboard'
engine = create_engine(db_string, convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))

Base = declarative_base()
Base.query = db_session.query_property()

def init_db():
    import models
    Base.metadata.create_all(bind=engine)
