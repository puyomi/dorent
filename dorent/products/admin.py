from django.contrib import admin
from . import models



@admin.register(models.CategoryId)
class CategoryIdAdmin(admin.ModelAdmin):
    list_display = (
        'cat_depth1',
        'cat_depth2',
        'cat_depth3',
    )


@admin.register(models.LocalBasicId)
class LocalBasicIdAdmin(admin.ModelAdmin):
    list_display = (
        'local_basic',
        'local_wide',
    )

@admin.register(models.Item)
class ItemAdmin(admin.ModelAdmin):

    list_display = (
        'creator',
        'subject',
        'content',
        'category_id',
        'local_basic_id',
        'local_address',
        'rent_day_start',
        'rent_day_end',
        'cost_per_day',
        'status',
    )

@admin.register(models.AddedImage)
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
        'want_day_start',
        'want_day_end',
    )