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
        feedback = Feedback.objects.filter(id=request.data['id']).first()
        serializer = FeedbackSerializer(instance=feedback, data=request.data, partial=True)
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
            serializer.data['id'] = 'ID LOOK'
            data = serializer.data
            data['id'] = feedback.id
            data['created_at'] = feedback.created_at
            data['updated_at'] = feedback.updated_at
            feedbacksList.append(data)
        return Response({
            'data': feedbacksList
        })


class getFeedbackView(APIView):
    def post(self, request):
        print(request.data)
        userId = cookieCheck(request)['id']
        user = User.objects.filter(id=userId).first()
        data = request.data
        feedbackId = data['id']
        feedback = Feedback.objects.filter(id=data['id']).first()
        if feedback.user_id == userId:
                return Response({
                    'subject': feedback.subject,
                    'message': feedback.message,
                    'created_at': feedback.created_at,
                    'updated_at': feedback.updated_at,
                })
        raise ValidationError
