from django.contrib import admin
from . import models



@admin.register(models.CategoryId)
class CategoryIdAdmin(admin.ModelAdmin):
    list_display = ()

@admin.register(models.LocalBasicId)
class LocalBasicIdAdmin(admin.ModelAdmin):
    list_display = ()

@admin.register(models.Item)
class ItemAdmin(admin.ModelAdmin):

    list_display = (
        'creator',
        'subject',
        'content',
        'category_id',
        'local_basic_id',
        'rent_day_start',
        'rent_day_end',
        'cost_per_day',
        'enroll',
        'active',
    )

@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = (
        'item',
        'file',
    )


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = (
        'item',
        'message',
        'creator',
    )


@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = (
        'item',
        'creator',
    )