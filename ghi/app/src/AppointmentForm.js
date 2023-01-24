import React, { useState, useEffect } from 'react';

function AppointmentForm() {

    const [formClass, setFormClass] = useState("");
    const [successClass, setSuccessClass] = useState("alert alert-success d-none");
    const [name, setName] = useState("");
    const [reason, setReason] = useState("");
    const [vin, setVin] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [tech, setTech] = useState("");

    const [techs, setTechs] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:8080/api/technicians/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechs(data.technicians)
        }
    }

    useEffect(() => {fetchData()}, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleReasonChange = (event) => {
        setReason(event.target.value);
    }
    const handleVinChange = (event) => {
        setVin(event.target.value);
    }
    const handleDateChange = (event) => {
        setDate(event.target.value);
    }
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }
    const handleTechChange = (event) => {
        setTech(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.customer_name = name;
        data.date = date;
        data.time = time;
        data.reason = reason;
        data.vin = vin;
        data.technician_id = tech

        const aptUrl = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(aptUrl, fetchConfig);
        if (response.ok) {
            setFormClass("d-none");
            setSuccessClass("alert alert-success")
        }
    }


    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Make an appointment</h1>
            <form className={formClass} onSubmit={handleSubmit} id="create-appointment-form">

              <div className="form-floating mb-3">
                <input value={name} onChange={handleNameChange} placeholder="Customer Name" required type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="name">Customer Name</label>
              </div>

              <div className="form mb-3">
                <label htmlFor="reason" className="form-label">Reason for visit</label>
                <textarea value={reason} onChange={handleReasonChange} className="form-control" required name="reason" id="reason" rows="3"></textarea>
              </div>

              <div className="form-floating mb-3">
                <input value={vin} onChange={handleVinChange} placeholder="Vehicle VIN" required type="text" name="vin" id="vin" className="form-control"/>
                <label htmlFor="vin">Vehicle VIN</label>
              </div>

              <div className="form-floating mb-3">
                <input value={date} onChange={handleDateChange} placeholder="mm/dd/yyyy" required type="date" name="date" id="date" className="form-control"/>
                <label htmlFor="date">Date of appointment</label>
              </div>

              <div className="form-floating mb-3">
                <input value={time} onChange={handleTimeChange} placeholder="e.g. 10am" required type="time" name="time" id="time" className="form-control"/>
                <label htmlFor="time">Time</label>
              </div>

              <div className="mb-3">
                <select value={tech} onChange={handleTechChange} required name="tech" id="tech" className="form-select">
                  <option value="">Choose one of our friendly technicians</option>
                  {techs.map(tech => {return (<option key={tech.id} value={tech.id}> {tech.name} </option> )})}
                </select>
              </div>

              <button className="btn btn-primary">Submit</button>
            </form>
            <div className={successClass} role='alert'> Appointment made. See you soon. </div>
          </div>
        </div>
      </div>
    )

}

export default AppointmentForm
