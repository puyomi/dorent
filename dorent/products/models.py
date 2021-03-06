from django.db import models
from dorent.users import models as user_models

class TimeStampedModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class CategoryId(models.Model):
    
    cat_depth1 = models.CharField(max_length=80, null=True)
    cat_depth2 = models.CharField(max_length=80, null=True)
    cat_depth3 = models.CharField(max_length=80, null=True)

    def __str__(self):
        return '{} - {} - {}'.format(self.cat_depth1, self.cat_depth2, self.cat_depth3)

class LocalBasicId(models.Model):

    local_basic =  models.CharField(max_length=80, null=True)
    local_wide = models.CharField(max_length=80, null=True)

    def __str__(self):
        return '{} - {}'.format(self.local_basic, self.local_wide)

class Item(TimeStampedModel):

    """ITEM MODEL"""

    creator = models.ForeignKey(user_models.User, on_delete=models.PROTECT, related_name='rento_items')
    subject = models.CharField(max_length=800)
    content = models.TextField()
    category_id = models.ForeignKey(CategoryId, on_delete=models.PROTECT, related_name='cats')
    local_basic_id = models.ForeignKey(LocalBasicId, on_delete=models.PROTECT)
    local_address = models.CharField(max_length=800)
    rent_day_start = models.DateField()
    rent_day_end = models.DateField()
    cost_per_day = models.IntegerField()
    TYPE_STATUSES = (('promo','프로모션상품'),('active','활성화'), ('inactive','비활성화'), ('deleted','삭제'))
    status = models.CharField(max_length=30, choices=TYPE_STATUSES, default='active')

    @property
    def like_count(self):
        return self.likes.all().count()

    @property
    def comment_count(self):
        return self.comments.all().count()

    @property
    def image_count(self):
        return self.images.all().count()

    class Meta:
        ordering = ['-updated_at']



class AddedImage(models.Model):

    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='images')
    file = models.ImageField()

class Comment(TimeStampedModel):

    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='comments')
    message = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return 'User: {} - Item Subject: {}'.format(self.creator.username, self.item.subject)

class Like(TimeStampedModel):

    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='likes')
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
    want_day_start = models.DateField(auto_now=True)
    want_day_end = models.DateField(auto_now=True)

    def __str__(self):
        return 'User: {} - Item Subject: {}'.format(self.creator.username, self.item.subject)


