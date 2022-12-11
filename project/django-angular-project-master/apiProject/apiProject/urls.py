from api import views
from django.urls import re_path, include
from django.contrib import admin
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'notes', views.NoteViewSet)

urlpatterns = [

    # Admin url
    re_path(r'^admin/', admin.site.urls),

    # Page url
    re_path(r'^$', views.HomePageView.as_view()),
    re_path(r'^users/', views.UsersPageView.as_view()),
    re_path(r'^notes/', views.NotesPageView.as_view()),

    # Api urls
    re_path(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^api/', include(router.urls))

]
