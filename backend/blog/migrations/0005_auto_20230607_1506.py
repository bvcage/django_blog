# Generated by Django 3.2.19 on 2023-06-07 15:06

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20230607_1504'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='updated_TS',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='created_TS',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
