
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

# Allow CORS for local frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Feedback(BaseModel):
    name: str
    email: str
    number: str
    role: str
    love: str
    opinion: str


@app.post("/submit-feedback")
def receive_feedback(feedback: Feedback):
    # Here you could save feedback to a database or process it
    return {"status": "received", "name": feedback.name, "email": feedback.email}