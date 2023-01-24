from common.json import ModelEncoder
from .models import Sale, AutomobileVO, Customer, Employee


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href",
        "status",
    ]


class EmployeeEncoder(ModelEncoder):
    model = Employee
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "sale_price",
        "sales_person",
        "customer",
        "automobile",
    ]
    encoders={
        "automobile": AutomobileVOEncoder(),
        "customer": CustomerEncoder(),
        "sales_person": EmployeeEncoder(),

    }

    def get_extra_data(self, o):
        return {"customer": o.customer.name}
