from django.contrib.auth import get_user_model
# from django.contrib.auth.mixins import LoginRequiredMixin
# from django.urls import reverse
# from django.views.generic import DetailView, ListView, RedirectView, UpdateView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers

class UserSimpleProfile(APIView):

    def get(self, request, username, format=None):

        found_user = models.User.objects.get(username=username)
        serializer = serializers.UserProfileSerializer(found_user)
        return Response(data=serializer.data ,status=status.HTTP_200_OK)

class UserDetailProfile(APIView):
    
    def get(self, request, username, format=None):
        user = request.user
        if user.username == username:
            found_user = models.User.objects.get(username=username)
            serializer = serializers.UserProfileDetailSerializer(found_user)
            return Response(data=serializer.data ,status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)












# """"""""""""""""""""""""""""""" 초기설정파일 """""""""""""""""""""""""""""""""""""
# User = get_user_model()


# class UserDetailView(LoginRequiredMixin, DetailView):

#     model = User
#     slug_field = "username"
#     slug_url_kwarg = "username"


# user_detail_view = UserDetailView.as_view()


# class UserListView(LoginRequiredMixin, ListView):

#     model = User
#     slug_field = "username"
#     slug_url_kwarg = "username"


# user_list_view = UserListView.as_view()


# class UserUpdateView(LoginRequiredMixin, UpdateView):

#     model = User
#     fields = ["name"]

#     def get_success_url(self):
#         return reverse("users:detail", kwargs={"username": self.request.user.username})

#     def get_object(self):
#         return User.objects.get(username=self.request.user.username)


# user_update_view = UserUpdateView.as_view()


# class UserRedirectView(LoginRequiredMixin, RedirectView):

#     permanent = False

#     def get_redirect_url(self):
#         return reverse("users:detail", kwargs={"username": self.request.user.username})


# user_redirect_view = UserRedirectView.as_view()
