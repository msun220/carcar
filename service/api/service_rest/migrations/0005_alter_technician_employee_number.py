# Generated by Django 4.0.3 on 2023-01-23 22:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_alter_appointment_vin_alter_automobilevo_vin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='technician',
            name='employee_number',
            field=models.IntegerField(unique=True),
        ),
    ]