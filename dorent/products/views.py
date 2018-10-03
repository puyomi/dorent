from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers



class ItemDetail(APIView):

    def get(self, request, item_id, format=None):

        found_item = models.Item.objects.get(id=item_id)

        serializer = serializers.ItemDetailSerializer(found_item)

        return Response(data=serializer.data ,status=status.HTTP_200_OK)