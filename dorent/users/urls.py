from django.urls import path
from dorent.users import views



app_name = "users"
urlpatterns = [
    path("<str:username>/", view=views.UserSimpleProfile.as_view(), name="user_view"),
    path("<str:username>/detail/", view=views.UserDetailProfile.as_view(), name="user_detail_view"),
]





# from dorent.users.views import (
#     user_list_view,
#     user_redirect_view,
#     user_update_view,
#     user_detail_view,
# )

    # path("~redirect/", view=user_redirect_view, name="redirect"),
    # path("~update/", view=user_update_view, name="update"),