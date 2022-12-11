from rest_framework import serializers
from app.models import UserTest


class UserTestSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTest
        fields = ('id',
                  'name',
                  'age')