from django.urls import re_path
from app import views

urlpatterns = [
    re_path(r'^api/tutorials$', views.userList),
    re_path(r'^api/tutorials/(?P<pk>[0-9]+)$', views.userTutorial),
    re_path(r'^api/tutorials/published$', views.user_list_published)
]