from rest_framework import serializers
from . import models
from dorent.products import serializers as prod_serializers


class UserProfileSerializer(serializers.ModelSerializer):
    
    rento_items = prod_serializers.UserItemSimpleSerializer(many=True)

    class Meta:
        model = models.User
        fields = (
            'id',
            'username',
            'profile_image',
            'exp',
            'user_level',
            'bio',
            'last_login',
            'rento_items',
            'rento_item_count',
        )


class UserProfileDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = ('__all__')