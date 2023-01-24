# Generated by Django 4.0.3 on 2023-01-23 21:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.CharField(max_length=200, unique=True)),
                ('vin', models.CharField(max_length=17, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.PositiveSmallIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=10, unique=True)),
            ],
            options={
                'verbose_name_plural': 'statuses',
                'ordering': ('id',),
            },
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('employee_number', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=200)),
                ('date', models.DateField()),
                ('time', models.CharField(max_length=10)),
                ('reason', models.TextField()),
                ('status', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='appointments', to='service_rest.status')),
                ('technician', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointments', to='service_rest.technician')),
                ('vin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointments', to='service_rest.automobilevo')),
            ],
        ),
    ]
