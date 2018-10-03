from django.db import models
from dorent.users import models as user_models
from dorent.products import models as prod_models

class Notification(prod_models.TimeStampedModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('reserve', 'Reserve'),
    )

    noti_from_user = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name="noti_from_user")
    noti_to_user = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name="noti_to_user")
    noti_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    noti_item = models.ForeignKey(prod_models.Item, on_delete=models.CASCADE, related_name="noti_item",null=True, blank=True)
    noti_comment = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return 'From: {}  -  To: {}  -  {}'.format(self.noti_from_user, self.noti_to_user, self.noti_type)