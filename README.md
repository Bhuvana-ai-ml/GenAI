# Persona-Consistent AI Agent (Gemini API)

## Overview
A production-grade GenAI system that generates consistent, persona-locked responses using Google Gemini API with minimal user input.

## Gemini API Usage (Mandatory Disclosure)
This project uses Google Gemini API (`google-generativeai`) for all AI-generated responses.
The core intelligence, prompt engineering, and reasoning are powered exclusively by Gemini models.

## Tech Stack
- Frontend: Next.js (React)
- Backend: Django REST Framework
- Authentication: JWT
- AI: Google Gemini API
- Deployment: Render (Backend), Vercel (Frontend)

## Architecture
Frontend → JWT Auth → Django API → Prompt Builder → Gemini API → Response

## Environment Variables
Backend:
- `GEMINI_API_KEY`

Frontend:
- `NEXT_PUBLIC_API_URL`

## Setup Instructions
1. Clone the repository
2. Setup backend and frontend environments
3. Add API keys
4. Run backend and frontend servers

## Disclaimer
This project was developed originally during the hackathon development phase.
