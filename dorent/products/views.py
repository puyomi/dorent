from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers



class UploadProducts(APIView):
    # Upload Item
    def post(self, request, format=None):
        user = request.user
        serializer = serializers.UploadItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(creator=user, status="active")
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FeedRecommendedItem(APIView):

    def get(self, request, format=None):

        item_list = models.Item.objects.all().order_by('-updated_at')[:20]
        serializer = serializers.ItemDetailSerializer(item_list, many=True)
        return Response(data=serializer.data ,status=status.HTTP_200_OK)


class ItemDetail(APIView):

    def get(self, request, item_id, format=None):

        found_item = models.Item.objects.get(id=item_id)

        serializer = serializers.ItemDetailSerializer(found_item)

        return Response(data=serializer.data ,status=status.HTTP_200_OK)