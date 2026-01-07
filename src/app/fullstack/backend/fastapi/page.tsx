'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiFastapi } from "react-icons/si";

export default function FastAPIPage() {
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const sections = [
    { id: 'basics', title: 'Basics' },
    { id: 'routes', title: 'Routes' },
    { id: 'models', title: 'Pydantic Models' },
    { id: 'dependencies', title: 'Dependencies' },
    { id: 'database', title: 'Database' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1e] to-[#0a0a0a]">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/fullstack/backend" className="text-2xl font-bold gradient-text">
              Open Stack JS
            </Link>
            <Link href="/fullstack/backend" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Backend
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 py-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-600/20 to-green-600/20 rounded-full border border-teal-500/30 mb-8">
              <SiFastapi className="w-5 h-5 text-teal-400" />
              <span className="text-teal-400 font-semibold">FastAPI Guide</span>
            </div>
            
            <h1 className="text-7xl font-bold mb-6">
              <span className="gradient-text block mb-4">FastAPI</span>
              <span className="text-white block text-4xl">Modern Python Web Framework</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Fast, modern Python web framework for building APIs with automatic documentation and type hints.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3">
              <div className="glass rounded-2xl p-6 border border-white/10 sticky top-28">
                <h3 className="text-white font-semibold mb-4">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="col-span-9">
              {activeSection === 'basics' && <BasicsSection />}
              {activeSection === 'routes' && <RoutesSection />}
              {activeSection === 'models' && <ModelsSection />}
              {activeSection === 'dependencies' && <DependenciesSection />}
              {activeSection === 'database' && <DatabaseSection />}
              {activeSection === 'best-practices' && <BestPracticesSection />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BasicsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">FastAPI Basics</h2>
        <p className="text-white/60 text-lg mb-8">
          FastAPI is a modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints.
        </p>
      </div>

      <CodeExample
        language="bash"
        code={`# Installation
pip install fastapi uvicorn[standard]

# Run Server
uvicorn main:app --reload`}
      />

      <CodeExample
        language="python"
        code={`# main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

# Automatic API Documentation
# Swagger UI: http://localhost:8000/docs
# ReDoc: http://localhost:8000/redoc`}
      />
    </div>
  );
}

function RoutesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Routes</h2>
        <p className="text-white/60 text-lg mb-8">
          Define routes with decorators. FastAPI supports GET, POST, PUT, DELETE, PATCH, and more HTTP methods.
        </p>
      </div>

      <CodeExample
        language="python"
        code={`from fastapi import FastAPI, Path, Query
from typing import Optional

app = FastAPI()

# GET Route
@app.get("/items/{item_id}")
def get_item(item_id: int):
    return {"item_id": item_id}

# POST Route
@app.post("/items/")
def create_item(item: dict):
    return item

# Path Parameters
@app.get("/items/{item_id}/comments/{comment_id}")
def get_comment(
    item_id: int = Path(..., gt=0),
    comment_id: int = Path(..., gt=0)
):
    return {"item_id": item_id, "comment_id": comment_id}

# Query Parameters
@app.get("/items/")
def get_items(
    skip: int = 0,
    limit: int = Query(10, le=100),
    q: Optional[str] = None
):
    return {"skip": skip, "limit": limit, "q": q}

# Request Body
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.post("/items/")
def create_item(item: Item):
    return item

# Response Models
@app.get("/items/", response_model=Item)
def get_item():
    return {"name": "Foo", "price": 10.5}

# Status Codes
from fastapi import status

@app.post("/items/", status_code=status.HTTP_201_CREATED)
def create_item(item: Item):
    return item`}
      />
    </div>
  );
}

function ModelsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Pydantic Models</h2>
        <p className="text-white/60 text-lg mb-8">
          Use Pydantic models for request/response validation and serialization. Automatic validation and type conversion.
        </p>
      </div>

      <CodeExample
        language="python"
        code={`from pydantic import BaseModel, EmailStr, Field, validator
from typing import Optional, List
from datetime import datetime

# Basic Model
class User(BaseModel):
    id: int
    name: str
    email: EmailStr
    age: Optional[int] = None

# Model with Validation
class Item(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    price: float = Field(..., gt=0, description="Price must be positive")
    quantity: int = Field(1, ge=1, le=100)
    description: Optional[str] = None
    
    @validator('name')
    def name_must_contain_space(cls, v):
        if ' ' not in v:
            raise ValueError('Name must contain a space')
        return v.title()

# Nested Models
class Address(BaseModel):
    street: str
    city: str
    country: str

class UserProfile(BaseModel):
    user: User
    address: Address
    tags: List[str] = []

# Model Config
class Config:
    schema_extra = {
        "example": {
            "name": "Foo",
            "price": 10.5,
            "quantity": 5
        }
    }

# Using Models
@app.post("/users/")
def create_user(user: User):
    return user

@app.get("/users/", response_model=List[User])
def get_users():
    return [
        User(id=1, name="John", email="john@example.com"),
        User(id=2, name="Jane", email="jane@example.com")
    ]`}
      />
    </div>
  );
}

function DependenciesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Dependencies</h2>
        <p className="text-white/60 text-lg mb-8">
          Use dependencies for dependency injection, authentication, database connections, and shared logic.
        </p>
      </div>

      <CodeExample
        language="python"
        code={`from fastapi import Depends, HTTPException, Header
from typing import Optional

# Simple Dependency
def get_db():
    db = "database_connection"
    try:
        yield db
    finally:
        db.close()

@app.get("/items/")
def get_items(db = Depends(get_db)):
    return {"db": db}

# Dependency with Parameters
def get_items_common(
    q: Optional[str] = None,
    skip: int = 0,
    limit: int = 100
):
    return {"q": q, "skip": skip, "limit": limit}

@app.get("/items/")
def read_items(commons: dict = Depends(get_items_common)):
    return commons

# Authentication Dependency
def verify_token(authorization: str = Header(...)):
    if authorization != "Bearer secret-token":
        raise HTTPException(status_code=401, detail="Invalid token")
    return authorization

@app.get("/protected/")
def protected_route(token: str = Depends(verify_token)):
    return {"message": "Protected data"}

# Multiple Dependencies
def get_query_token(x_token: str = Header(...)):
    if x_token != "secret-token":
        raise HTTPException(status_code=400, detail="Invalid token")
    return x_token

def get_query_skip(skip: int = 0):
    return skip

@app.get("/items/")
def read_items(
    token: str = Depends(get_query_token),
    skip: int = Depends(get_query_skip)
):
    return {"token": token, "skip": skip}

# Class-based Dependencies
class Pagination:
    def __init__(self, skip: int = 0, limit: int = 100):
        self.skip = skip
        self.limit = limit

@app.get("/items/")
def read_items(pagination: Pagination = Depends()):
    return {"skip": pagination.skip, "limit": pagination.limit}`}
      />
    </div>
  );
}

function DatabaseSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Database Integration</h2>
        <p className="text-white/60 text-lg mb-8">
          Integrate databases with FastAPI using SQLAlchemy, databases, or other ORMs. Learn connection pooling and async operations.
        </p>
      </div>

      <CodeExample
        language="python"
        code={`# SQLAlchemy Setup
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Model
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)

Base.metadata.create_all(bind=engine)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Using Database
@app.post("/users/", response_model=User)
def create_user(user: User, db = Depends(get_db)):
    db_user = User(name=user.name, email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/{user_id}", response_model=User)
def get_user(user_id: int, db = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Async Database (databases library)
from databases import Database

database = Database("postgresql://user:pass@localhost/db")

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/items/")
async def read_items():
    query = "SELECT * FROM items"
    return await database.fetch_all(query)`}
      />
    </div>
  );
}

function BestPracticesSection() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">Best Practices</h2>
        <p className="text-white/60 text-lg mb-8">
          Follow these patterns for production-ready FastAPI applications.
        </p>
      </div>

      <CodeExample
        language="python"
        code={`# Project Structure
# app/
#   __init__.py
#   main.py
#   routers/
#     items.py
#     users.py
#   models/
#     user.py
#   schemas/
#     user.py
#   dependencies.py

# Router Organization
from fastapi import APIRouter

router = APIRouter(prefix="/items", tags=["items"])

@router.get("/")
def get_items():
    return []

app.include_router(router)

# Error Handling
from fastapi import HTTPException, Request
from fastapi.responses import JSONResponse

@app.exception_handler(ValueError)
async def value_error_handler(request: Request, exc: ValueError):
    return JSONResponse(
        status_code=400,
        content={"message": str(exc)}
    )

# CORS
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Background Tasks
from fastapi import BackgroundTasks

def write_log(message: str):
    with open("log.txt", "a") as f:
        f.write(message)

@app.post("/send-email/")
def send_email(background_tasks: BackgroundTasks):
    background_tasks.add_task(write_log, "Email sent")
    return {"message": "Email sent"}`}
      />
    </div>
  );
}

function CodeExample({ code, language = 'python' }: { code: string; language?: string }) {
  return (
    <div className="bg-[#1e1e1e] rounded-lg border border-white/10 overflow-hidden">
      <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-white/10">
        <span className="text-xs text-white/60 uppercase">{language}</span>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs text-white/60 hover:text-white transition-colors"
        >
          Copy
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-white/90 font-mono leading-relaxed">{code}</code>
      </pre>
    </div>
  );
}

