from rest_framework import generics, permissions
from .serializer import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import response

# Create your views here.


class CustomTokenObtainView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        user = serializer.instance
        headers = self.get_success_headers(serializer.data)
        return response.Response(
            {"details": "success"},
            headers=headers,
        )
