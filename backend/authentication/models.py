from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User

# Create your models here.


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email", "password", "id", "groups", "credits"]
        extra_kwargs = {"password": {"write_only": True}}
