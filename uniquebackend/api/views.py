from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Blog
from .serializer import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import response


class ListCreateBlog(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
