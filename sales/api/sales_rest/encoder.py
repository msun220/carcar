from common.json import ModelEncoder
from .models import Sale, AutomobileVO, Customer, Employee


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href",
    ]


class EmployeeEncoder(ModelEncoder):
    model = Employee
    properties = [
        "name",
        "employee_number",
        "id",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
        "id",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "sale_price",
        "sales_person",
        "customer",
        "automobile",
        "id",
    ]
    encoders={
        "automobile": AutomobileVOEncoder(),
        "customer": CustomerEncoder(),
        "sales_person": EmployeeEncoder(),

    }

    def get_extra_data(self, o):
        return {"customer": o.customer.name}
