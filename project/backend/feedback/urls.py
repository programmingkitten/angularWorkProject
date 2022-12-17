from django.urls import re_path, include

from django.contrib import admin
from django.urls import path
import user_auth.views as views

urlpatterns = [
    path('create', views.registerView.as_view()),
    path('edit', views.loginView.as_view()),
    path('delete', views.UserView.as_view()),

]
