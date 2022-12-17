from rest_framework import serializers

from user_auth.models import User, Feedback


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'description', 'imageURL']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        print(validated_data)
        instance.description = validated_data.get('description', instance.description)
        instance.imageURL = validated_data.get('imageURL', instance.imageURL)
        instance.picture = validated_data.get('picture', instance.picture)
        instance.save()
        return instance

class FeedbackSerializer(serializers.ModelSerializer):


    class Meta:
        model = Feedback
        fields = ['subject', 'message', 'user']

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.message = validated_data.get('message', instance.message)
        instance.subject = validated_data.get('subject', instance.subject)
        instance.save()
        return instance

