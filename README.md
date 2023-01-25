# CarCar

Team:

- Person 1 - Which microservice?
  Matthew Sun - Auto Service
- Person 2 - Which microservice?
  Sabina Bahodirova - Auto Sales

## Design

## Service microservice

I've created two models: Technician and Appointment.

Technician: This object represents a technician that will be responsible for doing a service appointment. It only needs a name and employee number (separate from it ID). The employee's number is unique so that no two employees can be registered under the same number. In the case that the user inputs a taken employee number into the TechnicianForm, the form will display an alert-danger asking for another input. This model is also a foreign key for the Appointment Model.

Appointment: This object represents an appointment that the user can create. It tracks incoming VIN of automobiles that request an appointment, regardless of whether that automobile was sold from our inventory or not. It also tracks customer name, date(+time), reason, responsible technician, and automatically has a status of "INCOMPLETE" upon creation. On the AppointmentList, users have the option to change the status of that appointment to "CANCELLED" or "COMPLETED" which will update the status of that appointment instance, and have it removed from the AppointmentList. Cancelled/Completed appointments are NOT deleted from the database and will continue to display on the list of appointment history (ServiceHistory).

AutomobileVO: This model (and its poller) was created but never used. The poller works though - advised by Warren to leave this model and the poller in for grading purposes only. All features available on the frontend are functional without the need for this model (and its poller).

## Sales microservice

I made four models; AutomobileVO, which is creating a new automobile by pulling data from the Automobile model in the Inventory app with the poller, Employee, which creates a new sales person, Customer, which creates a new customer, and Sale, which uses foreign keys for AutomobileVO, Employee, and Customer to make a new sale. As mentioned, the function get_automobile() is created in the poller to pull data from the Automobile model in the Inventory app.
