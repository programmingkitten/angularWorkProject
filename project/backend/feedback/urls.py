from django.urls import re_path, include

from django.contrib import admin
from django.urls import path
import feedback.views as views
urlpatterns = [
    path('feedback', views.feedbackView.as_view()),
    # path('feedback/delete', views.UserView.as_view()),

]
