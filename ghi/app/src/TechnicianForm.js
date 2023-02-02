 import React, { useState } from "react";


function TechnicianForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [warningClass, setWarningClass] = useState("alert alert-danger d-none");
  const [successClass, setSuccessClass] = useState(
    "alert alert-success d-none"
  );

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.name = name;
    data.employee_number = number;

    const techUrl = "http://localhost:8080/api/technicians/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(techUrl, fetchConfig);
    if (!response.ok) {
      setWarningClass("alert alert-danger");
      setSuccessClass("alert alert-success d-none");
    }
    if (response.ok) {
      setName("");
      setNumber("");
      setWarningClass("alert alert-danger d-none");
      setSuccessClass("alert alert-success");
    }
  };

  return (
    <>
      <div className="carousel-inner">
        <img src='https://us.moodmedia.com/wp-content/uploads/2021/10/4-pillars-feature.webp' className='opacity-50 w-100' style={{ height: "100vh"}} />
        <div className="carousel-caption d-none d-md-block h-100 pt-5">
          <div className="row" style={{ paddingTop: "100px" }}>
            <div className="offset-3 col-6 bg-light">
              <div className="p-4 mt-4 text-dark">
                <h1>Register a new technician</h1>
                <form onSubmit={handleSubmit} id="create-technician-form">
                  <div className="form-floating mb-3">
                    <input value={name} onChange={handleNameChange} placeholder="Technician Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Technician Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input value={number} onChange={handleNumberChange} placeholder="Technician Number" required type="number" name="technician_number" id="technician_number" className="form-control"/>
                    <label htmlFor="technician_number">Technician Number</label>
                  </div>
                  <div className={warningClass} role="alert">
                    {" "}Technician number already exists. Enter unique technician number.{" "}
                  </div>
                  <div className={successClass} role="alert">
                    {" "}Successfully registered.{" "}
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnicianForm;
