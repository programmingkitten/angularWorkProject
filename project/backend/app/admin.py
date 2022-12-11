from django.contrib import admin


# Register your models here.
from app.models import UserTest


class UserAdmin(admin.ModelAdmin):
    pass


admin.site.register(UserTest, UserAdmin)
