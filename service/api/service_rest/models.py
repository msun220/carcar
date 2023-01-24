from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})


class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.IntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_list_technician", kwargs={"pk": self.pk})


class Appointment(models.Model):
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=200)
    date = models.DateTimeField()
    time = models.CharField(max_length=10)
    reason = models.TextField()
    status = models.CharField(max_length=30, default="INCOMPLETE")

    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )

    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.pk})
