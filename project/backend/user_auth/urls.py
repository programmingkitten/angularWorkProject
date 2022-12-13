from django.urls import re_path, include

from django.contrib import admin
from django.urls import path
import user_auth.views as views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register', views.registerView.as_view())

]
