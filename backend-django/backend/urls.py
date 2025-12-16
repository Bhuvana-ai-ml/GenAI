from django.contrib import admin
from django.urls import path
from rest_framework.response import Response
from rest_framework.decorators import api_view

from core.auth_views import login, register
from core.views import generate


@api_view(["GET"])
def health(request):
    return Response({"status": "Backend running"})


urlpatterns = [
    path("", health),          # 👈 THIS FIXES 405
    path("register/", register),
    path("login/", login),
    path("generate/", generate),
]
