from common.json import ModelEncoder
from .models import Sale, AutomobileVO, Customer, Employee


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href",
    ]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "customer",
        "automobile",
    ]


class SaleDetailEncoder(ModelEncoder):
    model = Sale
    properties = [
        "sale_price",
        "sales_person",
        "customer",
        "automobile",
    ]
    encoders={
        "automobile": AutomobileVOEncoder()
    }

class EmployeeEncoder(ModelEncoder):
    model = Employee
    properties = [
        "name",
        "employee_number",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
    ]
