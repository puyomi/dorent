# Generated by Django 2.0.9 on 2018-10-03 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_auto_20181004_0226'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='status',
            field=models.CharField(choices=[('promo', '프로모션상품'), ('active', '활성화'), ('inactive', '비활성화'), ('deleted', '삭제')], default='active', max_length=30),
        ),
    ]
