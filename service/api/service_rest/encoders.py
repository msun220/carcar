from common.json import ModelEncoder
from .models import Appointment, Technician


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
        "id"
    ]


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "customer_name",
        "date",
        "reason",
        "status",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder()
    }


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "customer_name",
        "date",
        "reason",
        "status",
        "technician",
    ]
    def get_extra_data(self, o):
        return {"technician": o.technician.name}
