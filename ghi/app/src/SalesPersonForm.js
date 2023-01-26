 import React, { useState } from "react";


function SalesPersonForm() {
  const [salesPersonName, setSalesPersonName] = useState("");
  const handleSalesPersonNameChange = (e) => {
    setSalesPersonName(e.target.value);
  };

  const [employeeNumber, setEmployeeNumber] = useState("");
  const handleEmployeeNumberChange = (e) => {
    setEmployeeNumber(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.name = salesPersonName;
    data.employee_number = employeeNumber;

    const url = `http://localhost:8090/api/employees/`;

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      setSalesPersonName("");
      setEmployeeNumber("");
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a new Sales Associate</h1>
          <form onSubmit={handleSubmit} id="create-employee-form">
            <div className="form-floating mb-3">
              <input onChange={handleSalesPersonNameChange} value={salesPersonName} placeholder="Name" required name="name" className="form-control"/>
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleEmployeeNumberChange} value={employeeNumber} placeholder="Employee Number" required name="employee_number" type="number" id="employee_number" className="form-control"/>
              <label htmlFor="employee_number">Employee Number</label>
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SalesPersonForm;
