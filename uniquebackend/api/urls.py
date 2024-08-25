from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import (
    TokenVerifyView,
    TokenRefreshView,
)

urlpatterns = [
    path("blog/", views.ListCreateBlog.as_view(), name="blog_list"),
]
