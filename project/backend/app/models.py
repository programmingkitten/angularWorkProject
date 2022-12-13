from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class UserTest(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()


class User(AbstractUser):
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
