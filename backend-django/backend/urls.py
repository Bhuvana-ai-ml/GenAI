from django.urls import path
from core.auth_views import login, register
from core.views import generate, health

urlpatterns = [
    path("", health),          # 👈 root URL (fixes 405 on Render)
    path("health/", health),
    path("register/", register),
    path("login/", login),
    path("generate/", generate),
]
