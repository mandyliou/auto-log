from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

# Create your views here.
from .models import Appointment, Technician
from .encoders import (
        AppointmentEncoder,
        TechnicianEncoder)


@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the technician"}
            )
            response.status_code = 400
            return response


@require_http_methods(["POST", "GET"])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            try:
                technician = content["technician"]
                technician = Technician.objects.get(id=technician)
                content["technician"] = technician
            except:
                response = JsonResponse(
                    {"message": "Invalid technician id"}
                )
                response.status_code = 400
                return response
            appointment = Appointment.objects.create(**content)
            appointment.compare_vins()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the appointment"}
            )
            response.status_code = 400
            return response
