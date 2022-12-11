from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser

from app.models import UserTest
from app.serializers import UserTestSerializer

...


@api_view(['GET', 'POST', 'DELETE'])
def userList(request):
    if request.method == 'GET':
        users = UserTest.objects.all()

        title = request.GET.get('title', None)
        if title is not None:
            users = users.filter(title__icontains=title)

        users_serializer = UserTestSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)

    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        userSerializer = UserTestSerializer(data=tutorial_data)
        if userSerializer.is_valid():
            userSerializer.save()
            return JsonResponse(userSerializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(userSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

# GET list of tutorials, POST a new tutorial, DELETE all tutorials


@api_view(['GET', 'PUT', 'DELETE'])
def userDetails(request, pk):
    try:
        user = UserTest.objects.get(pk=pk)
    except UserTest.DoesNotExist:
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def user_list_published(request):
    return JsonResponse
# GET all published tutorials