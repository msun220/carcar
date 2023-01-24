from django.urls import path
from .views import api_list_appointments, api_show_appointment, api_list_technician, api_cancel_appointment


# multiple paths here with the same url and function - listed only for devs to understand which paths have which http methods.


urlpatterns = [
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/", api_list_appointments, name="api_create_appointment"),
    path("appointments/<int:pk>/", api_show_appointment, name="api_show_appointment"),
    path("technician/", api_list_technician, name="api_list_technician"),
    path("technician/", api_list_technician, name="api_create_technician"),
    path("technician/<int:pk>/", api_list_technician, name="api_delete_technician"),
    path("appointments/<int:pk>/cancel/", api_cancel_appointment, name="api_cancel_appointment"),
]
