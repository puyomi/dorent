# Generated by Django 2.0.9 on 2018-11-02 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_auto_20181004_0334'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Image',
            new_name='AddedImage',
        ),
        migrations.AddField(
            model_name='item',
            name='index_image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
