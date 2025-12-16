from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from core.persona import get_persona
from core.prompt import build_prompt
from core.ai_client import call_ai


@api_view(["GET"])
def health(request):
    return Response({"status": "Backend running"})


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def generate(request):
    task = request.data.get("task", "")

    persona = get_persona()
    prompt = build_prompt(persona, task)
    result = call_ai(prompt)

    return Response({"result": result})
