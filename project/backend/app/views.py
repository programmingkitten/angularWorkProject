from django.contrib.auth.views import LoginView
from django.http import JsonResponse
from django.shortcuts import render
import django.views.generic as views
# Create your views here.
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from app.models import UserTest
from app.serializers import UserTestSerializer, UserSerializer

...


class homeView(views.TemplateView):
    template_name = 'index.html'


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

@api_view(['POST'])
def addUser(request, data):
    if request.method == 'GET':
        print(request, data)


@api_view(['GET', 'POST', 'DELETE'])
def userList(request, data=None):
    if request.method == 'GET':
        users = UserTest.objects.all()

        title = request.GET.get('title', None)
        if title is not None:
            users = users.filter(title__icontains=title)

        users_serializer = UserTestSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)

    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        userSerializer = UserTestSerializer(data=user_data)
        if userSerializer.is_valid():
            userSerializer.save()
            print(data)
            return JsonResponse(userSerializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse({'ERROR': "UKNOWn"}, status=status.HTTP_400_BAD_REQUEST)


# GET list of tutorials, POST a new tutorial, DELETE all tutorials


@api_view(['GET', 'PUT', 'DELETE'])
def userDetails(request, pk):
    try:
        user = UserTest.objects.get(pk=pk)
        return JsonResponse({'user':
            {
                'name': user.name,
                'age': user.age
            }},
            status=status.HTTP_200_OK)
    except UserTest.DoesNotExist:
        return JsonResponse({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def user_list_published(request):
    return JsonResponse
# GET all published tutorials
