from rest_framework import serializers
from . import models
from dorent.users import models as user_models


class ItemDetailUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_models.User
        fields = ('username','profile_image','exp','user_level')

class ImageListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AddedImage
        fields = ('__all__')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CategoryId
        fields = ('__all__')

class LocalSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.LocalBasicId
        fields = ('__all__')



class UserItemSimpleSerializer(serializers.ModelSerializer):
    images = ImageListSerializer(many=True)
    category_id = CategorySerializer()
    local_basic_id = LocalSerializer()
    class Meta:
        model = models.Item
        fields = (
            'id',
            'images',
            'subject',
            'category_id',
            'local_basic_id',
            'cost_per_day',
        )        

# OW
class UploadItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Item
        fields = (
            'subject',
            'content',
            'category_id',
            'local_basic_id',
            'local_address',
            'rent_day_start',
            'rent_day_end',
            'cost_per_day',
        )



class ItemDetailSerializer(serializers.ModelSerializer):
    images = ImageListSerializer(many=True)
    creator = ItemDetailUserSerializer()
    category_id = CategorySerializer()
    local_basic_id = LocalSerializer()
    class Meta:
        model = models.Item
        fields = (
            'id',
            'creator',
            'images',
            'subject',
            'category_id',
            'local_basic_id',
            'rent_day_start',
            'rent_day_end',
            'cost_per_day',
            'content',
            'comments',
            'likes',
            'status',
        )

