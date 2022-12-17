from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    description = models.CharField(max_length=255, null=True, blank=True)
    imageURL = models.CharField(max_length=400, null=True, blank=True, default='no image')
    picture = models.CharField(max_length=255, null=True, blank=True, default="no image")
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class Feedback(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')
    subject = models.CharField(max_length=40)
    message = models.TextField(max_length=1500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
