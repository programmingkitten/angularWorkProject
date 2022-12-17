import jwt
from django.shortcuts import render

# Create your views here.
from rest_framework.exceptions import AuthenticationFailed, ValidationError
from rest_framework.response import Response
from rest_framework.views import APIView

from user_auth.models import User, Feedback
from user_auth.serializers import FeedbackSerializer


def cookieCheck(request):
    token = request.COOKIES.get('jwt')
    if not token:
        raise AuthenticationFailed('Unauthenticated!')

    try:
        return jwt.decode(token, 'secret', algorithms=["HS256"])
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed('Unauthenticated!')


class feedbackView(APIView):
    def post(self, request):
        userId = cookieCheck(request)['id']
        data = request.data
        user = User.objects.filter(id=userId).first()
        data['user'] = user.pk
        serializer = FeedbackSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def put(self, request):
        userId = cookieCheck(request)['id']
        data = request.data
        user = User.objects.filter(id=userId).first()
        data['user'] = user
        print("IMHERE")
        serializer = FeedbackSerializer(request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        raise ValidationError
    def get(self, request):
        userId = cookieCheck(request)['id']
        feedbacks = Feedback.objects.filter(user_id=userId)
        feedbacksList = []
        for feedback in feedbacks:
            serializer = FeedbackSerializer(feedback)
            feedbacksList.append(serializer.data)
        return Response({
            'data': feedbacksList
        })


class editView(APIView):
    def put(self, request):
        userId = cookieCheck(request)['id']
        data = request.data
        user = User.objects.filter(id=userId).first()
        data['user'] = user
        serializer = FeedbackSerializer(instance=user, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        raise ValidationError
