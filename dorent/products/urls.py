from django.urls import path
from . import views


app_name = "products"
urlpatterns = [
    path("<int:item_id>/", view=views.ItemDetail.as_view(), name="item_detail"),
]