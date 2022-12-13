from rest_framework import serializers
from app.models import UserTest
from app.models import User


class UserTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTest
        fields = ('id',
                  'name',
                  'age')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password']
