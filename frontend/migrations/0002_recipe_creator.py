# Generated by Django 2.1.7 on 2019-03-06 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='creator',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
