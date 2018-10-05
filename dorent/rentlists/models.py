from django.db import models
from dorent.users import models as user_models
from dorent.products import models as prod_models

class TimeStampedModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


