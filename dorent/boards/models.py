from django.db import models
from dorent.users import models as user_models

class TimeStampedModel(models.Model):
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class NoticeBoard(TimeStampedModel):

    title = models.CharField()
    content = models.TextField()

class QuestionBoard(TimeStampedModel):

    title = models.CharField()
    content = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE)
    
class QuestionAnswer(TimeStampedModel):

    question = models.ForeignKey(QuestionBoard, on_delete=models.CASCADE)
    content = models.TextField()
