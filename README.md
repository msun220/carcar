# CarCar

Team:

- Person 1 - Which microservice?
  Matthew Sun - Auto Service
- Person 2 - Which microservice?
  Sabina Bahodirova - Auto Sales

## Design

## Service microservice (Matthew Sun)

*Models*

I've created two models: Technician and Appointment.

Technician: This object represents a technician that will be responsible for doing a service appointment. It only needs a name and employee number (separate from it ID). The employee's number is unique so that no two employees can be registered under the same number. In the case that the user inputs a taken employee number into the TechnicianForm, the form will display an alert-danger asking for another input. This model is also a foreign key for the Appointment Model.

Appointment: This object represents an appointment that the user can create. It tracks incoming VIN of automobiles that request an appointment, regardless of whether that automobile was sold from our inventory or not. It also tracks customer name, date(+time), reason, responsible technician, and automatically has a status of "INCOMPLETE" upon creation. On the AppointmentList, users have the option to change the status of that appointment to "CANCELLED" or "COMPLETED" which will update the status of that appointment instance, and have it removed from the AppointmentList. Cancelled/Completed appointments are NOT deleted from the database and will continue to display on the list of appointment history (ServiceHistory).

AutomobileVO: This model (and its poller) was created but never used. The poller works though - advised by Warren to leave this model and the poller in for grading purposes only. All features available on the frontend are functional without the need for this model (and its poller).

*Views*

The view functions that are available on the user-end are api_list_appointments, api_cancel_appointment, api_complete_appointment, and api_create_technician. api_show_appointment was for developmental/testing purposes.

api_list_appointments: On "GET" - Provides all the appointments in the database. On "POST" - Makes a new appointment model instance.
api_cancel_appointment: This is a "PUT" request that changes the status of an appointment from "INCOMPLETE" to "CANCELLED".
api_complete_appointment: This is a "PUT" request that changes the status of an appointment from "INCOMPLETE" to "COMPLETED".
api_create_technician: On "GET" - Provides all the technicians in the database. On "POST" - Makes a new technician model. The "DELETE" method will delete a technician in the database, however, this is for developmental/testing purposes only and users will NOT have access to this feature.

api_show_appointment: For developmental/testing purposes, the "GET" method should display a singular appointment in deeper detail than how it appears in api_list_appointments. The "DELETE" method would delete an appointment instance.

*Encoders*

Some view functions that return a JSON Response use an encoder. The encoders will help display model details in the returned JSON and helped refactor/clean up the code on the views.py file in general. All encoders are imported from encoders.py, which in turn imports a ModelEnconder from json.py in the directory named "common".

## Sales microservice

I made four models; AutomobileVO, which is creating a new automobile by pulling data from the Automobile model in the Inventory app with the poller, Employee, which creates a new sales person, Customer, which creates a new customer, and Sale, which uses foreign keys for AutomobileVO, Employee, and Customer to make a new sale. As mentioned, the function get_automobile() is created in the poller to pull data from the Automobile model in the Inventory app.

The list sales view consisted of a GET and POST request and was used to list and create a sale with its sale cost, customer, sales person, and automobile using the customer, employee, and automobile models. Since the automobile model is a foreign key, I used its href to pull its data from the inventory. The show sale view was used to edit, delete, or show details of a sale, but wasn’t used for the front end, but as a developmental tool to keep track of data and debug. List employees and list customers views simply used the employee and customer models, respectively, and a get request wasn’t used in this case since there was no foreign key for the models where data had to be pulled from. I added an update sale status view to the inventory app to add a “status” property to the automobile as a way to keep track of a car that is available or sold. The status view is a PUT request, which changes the status an automobile from “AVAILABLE” to “SOLD”, which was then used to update the sales form drop-down from listing all automobiles in the inventory to only those that are “AVAILABLE” so that an automobile is only sold once.
