from django.urls import path
from core.views import generate, health   # ✅ IMPORT health
from core.auth_views import login, register
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("", health),                     # ✅ now works
    path("register/", register),
    path("login/", login),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("generate/", generate),
]
