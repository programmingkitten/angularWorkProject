# Generated by Django 4.1.4 on 2022-12-16 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_auth', '0003_user_imageurl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='imageURL',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
    ]
