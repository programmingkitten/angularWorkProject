from django.urls import re_path
from app import views

urlpatterns = [
    re_path(r'^api/users$', views.userList),
    re_path(r'^api/users/(?P<pk>[0-9]+)$', views.userDetails),
    re_path(r'^api/users/published$', views.user_list_published),
    re_path(r'^api/users/create$', views.addUser),
    re_path('api/register', views.RegisterView.as_view())
    # re_path('api/')
]