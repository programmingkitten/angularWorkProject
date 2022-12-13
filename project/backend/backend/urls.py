from django.urls import re_path, include

from django.contrib import admin
from django.urls import path

from app.views import homeView

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^', include('app.urls')),
    path('home', homeView.as_view())

]
