from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import (
    TokenVerifyView,
    TokenRefreshView,
)

urlpatterns = [
    path(
        "auth/login/", views.CustomTokenObtainView.as_view(), name="token_obtain_pair"
    ),
    path("auth/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("auth/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("auth/register/", views.RegisterView.as_view(), name="auth_register"),
]
