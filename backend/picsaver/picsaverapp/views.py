from django.shortcuts import render
from .models import Like, VkUser
from django.http import JsonResponse
from django.contrib.auth.models import User, Group


import json


def add_like(request):

    if request.method == 'POST':
        req = json.loads(str(request.body, encoding='utf-8'))
        id_photo = req['id_photo']
        urls = req['urls']
        description = req['description']
        id_user = 'empty'
        # --------
        all_data = Like.objects.all()
        for field in all_data:
            if id_photo == field.id_photos:
                Like.objects.filter(id_photos=id_photo).delete()
                return JsonResponse({'LIKE_ID_PHOTOS': id_photo, 'STATUS': 'removed'})

        # try:
        like = Like(id_photos=str(id_photo), urls=str(
            urls), description=str(description), id_user=str(id_user))
        like.save()
        return JsonResponse({'LIKE_ID_PHOTO': id_photo, 'STATUS': 'added'})
        # except:
        # return JsonResponse({'ERROR_WHILE_ADDING_LIKE': 500})
    return JsonResponse(request)


def get_likes(request):
    req = json.loads(str(request.body, encoding='utf-8'))
    userId = str(req['vk_id'])
    response = {'RESPONSE': []}
    print('==>', req)
    all_data = Like.objects.all()
    arr_fields = []
    for field in all_data:
        item = {}
        if field.id_user == userId:
            print(field.id_user)
            item['ID'] = field.id
            item['id_photo'] = field.id_photos
            item['description'] = field.description
            item['urls'] = json.loads(field.urls.replace("'", '"'))
            arr_fields.append(item)
    response['RESPONSE'] = arr_fields
    print(response)
    return JsonResponse(response)


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


def is_signed_up(request):
    req = json.loads(str(request.body, encoding='utf-8'))
    response = {'RESPONSE': False}
    print('----->', req['vk_id'])
    user = VkUser.objects.all()
    for field in user:
        if str(field.vk_id) == str(req['vk_id']):
            response['RESPONSE'] = True
            break

    return JsonResponse(response)


def log_in_by_vk(request):
    req = json.loads(str(request.body, encoding='utf-8'))
    print('req======>', req)
    response = {'RESPONSE': False}
    # try:
    user = User(username=req['vk_id'],
                first_name=req['name'], last_name=req['last_name'], email=req['email'])
    user.save()
    vk_user = VkUser(user=user, vk_id=req['vk_id'])
    vk_user.save()
    response['RESPONSE'] = True
    print('response==>', response)
    return JsonResponse(response)
    # except:
    #     print('response==>', response)
    #     return JsonResponse(response)
