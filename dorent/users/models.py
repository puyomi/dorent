from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):

    # First Name and Last Name do not cover name patterns
    # around the globe.
    """User Model"""

    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
        ('non-specified', 'Not specified')
    )

    profile_image = models.ImageField(null=True)
    name = models.CharField(_("Name of User"), blank=True, max_length=255)
    exp = models.IntegerField(default=0)
    bio = models.TextField(null=True)
    phone = models.CharField(max_length=140, null=True)
    gender = models.CharField(max_length=80, choices=GENDER_CHOICES, null=True)
    account_bank = models.CharField(max_length=200, null=True)
    account_num = models.CharField(max_length=800, null=True)
    balance = models.IntegerField(default=0)
    withdraw_request = models.IntegerField(default=0)

    @property
    def user_level(self):
        if self.exp >5000:
            return "고이고썩은물"
        if self.exp >1000:
            return "고인물"
        if self.exp >100:
            return "지하수"
        else:
            return "담수"
        

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
