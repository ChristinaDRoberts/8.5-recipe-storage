# Generated by Django 2.1.7 on 2019-03-01 20:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0004_auto_20190301_2003'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ingredient',
            old_name='quantitiy',
            new_name='quantity',
        ),
    ]
