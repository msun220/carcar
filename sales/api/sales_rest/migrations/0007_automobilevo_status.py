# Generated by Django 4.0.3 on 2023-01-24 22:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0006_alter_sale_automobile'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='status',
            field=models.CharField(default='AVAILABLE', max_length=200),
        ),
    ]
