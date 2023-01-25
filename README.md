# CarCar

Team:

* Person 1 - Which microservice?
    Matthew Sun - Auto Service
* Person 2 - Which microservice?
    Sabina Bahodirova - Auto Sales

## Design

## Service microservice

I've created two models: Technician and Appointment.
Technician: A technician object 


## Sales microservice

I made four models; AutomobileVO, which is creating a new automobile by pulling data from the Automobile model in the Inventory app with the poller, Employee, which creates a new sales person, Customer, which creates a new customer, and Sale, which uses foreign keys for AutomobileVO, Employee, and Customer to make a new sale. As mentioned, the function get_automobile() is created in the poller to pull data from the Automobile model in the Inventory app.
