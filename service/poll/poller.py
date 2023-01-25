import django
import os
import sys
import time
import json
import requests
from service_rest.models import AutomobileVO

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()


def poll():

    while True:
        print('Service poller polling for data')
        try:
            response = requests.get("http://inventory-api:8000/api/automobiles/")
            content = json.loads(response.content)
            for automobile in content["autos"]:
                AutomobileVO.objects.update_or_create(
                    import_href=automobile["href"],
                    defaults={"vin": automobile["vin"]},
                )
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(5)


if __name__ == "__main__":
    poll()
