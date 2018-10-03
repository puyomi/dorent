from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers


class ItemFeed(APIView):

    def get(self, request, format=None):

        found_items = models.Item.objects.all().order_by('-updated_at')[:30]
        item_list = []

        return Response(status=status.HTTP_200_OK)


class ItemDetail(APIView):

    def get(self, request, item_id, format=None):

        found_item = models.Item.objects.get(id=item_id)

        serializer = serializers.ItemDetailSerializer(found_item)

        return Response(data=serializer.data ,status=status.HTTP_200_OK)