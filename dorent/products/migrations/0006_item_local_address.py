# Generated by Django 2.0.9 on 2018-10-03 17:53

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_auto_20181004_0228'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='local_address',
            field=models.CharField(default=django.utils.timezone.now, max_length=800),
            preserve_default=False,
        ),
    ]
