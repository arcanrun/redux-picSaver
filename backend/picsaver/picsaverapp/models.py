from django.db import models


class Like(models.Model):
    id_photos = models.TextField(max_length=50)
    urls = models.TextField(max_length=1000)
    description = models.TextField(max_length=500)
    id_user = models.TextField(max_length=50)
