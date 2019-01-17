from django.shortcuts import render
from .models import Like
from django.http import JsonResponse


import json


def add_like(request):
    if request.method == 'POST':
        req = json.loads(str(request.body, encoding='utf-8'))
        id_photo = req['id_photo']
        urls = req['urls']
        id_user = 'empty'
        # try:
        like = Like(id_photos=str(id_photo), urls=str(
            urls), id_user=str(id_user))
        like.save()
        return JsonResponse({'RESPONSE': 200, 'LIKE_ID_PHOTO': id_photo})
        # except:
        # return JsonResponse({'ERROR_WHILE_ADDING_LIKE': 500})
    return JsonResponse(request)
