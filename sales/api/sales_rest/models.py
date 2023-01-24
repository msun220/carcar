from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)


class Employee(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.IntegerField(unique=True, null=False)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_list_employees", kwargs={"pk": self.pk})



class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_list_customers", kwargs={"pk": self.pk})


class Sale(models.Model):
    sale_price = models.IntegerField(unique=False)
    sales_person = models.ForeignKey(
        Employee,
        related_name="sales_person",
        on_delete=models.CASCADE,

    )
    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE,
    )
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_list_sales", kwargs={"pk": self.pk})
