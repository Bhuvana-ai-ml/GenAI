import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Use a supported model
model = genai.GenerativeModel("models/gemini-flash-latest")

def call_ai(prompt: str) -> str:
    response = model.generate_content(
        prompt,
        generation_config={
            "temperature": 0.4,
            "top_p": 0.9,
            "max_output_tokens": 1024
        }
    )
    return response.text
