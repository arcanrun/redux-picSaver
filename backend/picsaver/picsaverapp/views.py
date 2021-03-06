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
        # --------
        all_data = Like.objects.all()
        for field in all_data:
            if id_photo == field.id_photos:
                Like.objects.filter(id_photos=id_photo).delete()
                return JsonResponse({'LIKE_ID_PHOTOS': id_photo, 'STATUS': 'removed'})

        # try:
        like = Like(id_photos=str(id_photo), urls=str(
            urls), id_user=str(id_user))
        like.save()
        return JsonResponse({'LIKE_ID_PHOTO': id_photo, 'STATUS': 'added'})
        # except:
        # return JsonResponse({'ERROR_WHILE_ADDING_LIKE': 500})
    return JsonResponse(request)


def get_likes(request):
    pass


def islike(request):
    if request.method == 'POST':
        req = json.loads(str(request.body, encoding='utf-8'))
        # print(req)
        all_data = Like.objects.all()
        response = {'IS_LIKED': []}
        for i in range(len(req)):
            for field in all_data:
                if field.id_photos == req[i]:
                    response['IS_LIKED'].append(req[i])
                    continue
        print(response)
        return JsonResponse(response)
