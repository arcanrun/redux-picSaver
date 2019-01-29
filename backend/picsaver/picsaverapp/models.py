from django.db import models
from django.contrib.auth.models import User


class Like(models.Model):
    id_photos = models.TextField(max_length=50)
    urls = models.TextField(max_length=1000)
    description = models.TextField(max_length=500)
    id_user = models.TextField(max_length=50)


class VkUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    vk_id = models.TextField(max_length=200)
