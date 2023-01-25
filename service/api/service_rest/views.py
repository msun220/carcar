from django.shortcuts import render
from .models import Appointment, Technician
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import AppointmentDetailEncoder, AppointmentListEncoder, TechnicianEncoder
from django.db import IntegrityError


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):

    if request.method == "GET":
        appointments = Appointment.objects.order_by("-date")
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder
        )
    else:
        data = json.loads(request.body)
        appointment = Appointment.objects.create(**data)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_appointment(request, pk):

    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=pk)
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False
        )
    else:
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST", "DELETE"])
def api_list_technician(request, pk=None):

    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians,},
            encoder=TechnicianEncoder,
            safe=False
        )
    elif request.method == "POST":
        try:
            data = json.loads(request.body)
            technician = Technician.objects.create(**data)
        except IntegrityError:
            return JsonResponse(
                {"message": "Employee number already taken!"},
                status=400,
            )
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["PUT"])
def api_cancel_appointment(request, pk):

    try:
        appointment = Appointment.objects.get(id=pk)
        appointment.status = "CANCELLED"
        appointment.save(update_fields=['status'])
    except Appointment.DoesNotExist:
        response = JsonResponse({"message": "Does not exist"})
        response.status_code = 404
        return response
    return JsonResponse(
        appointment,
        encoder=AppointmentDetailEncoder,
        safe=False
    )


@require_http_methods(["PUT"])
def api_complete_appointment(request, pk):

    try:
        appointment = Appointment.objects.get(id=pk)
        appointment.status = "COMPLETED"
        appointment.save(update_fields=['status'])
    except Appointment.DoesNotExist:
        response = JsonResponse({"message": "Does not exist"})
        response.status_code = 404
        return response
    return JsonResponse(
        appointment,
        encoder=AppointmentDetailEncoder,
        safe=False
    )
