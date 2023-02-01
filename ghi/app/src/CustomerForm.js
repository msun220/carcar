import React, { useState } from "react";
import Nav from "./Nav";


function CustomerForm() {
  const [customerName, setCustomerName] = useState("");
  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const [address, setAddress] = useState("");
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.name = customerName;
    data.address = address;
    data.phone_number = phoneNumber;

    const url = `http://localhost:8090/api/customers/`;

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      setCustomerName("");
      setAddress("");
      setPhoneNumber("");
    }
  };

  return (
    <>
    <Nav />
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a new customer</h1>
          <form onSubmit={handleSubmit} id="create-customer-form">
            <div className="form-floating mb-3">
              <input onChange={handleCustomerNameChange} value={customerName} placeholder="Name" required name="name" className="form-control"/>
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleAddressChange} value={address} placeholder="Address" required name="address" type="text" id="address" className="form-control"/>
              <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handlePhoneNumberChange} value={phoneNumber} placeholder="Phone Number" required name="phone_number" type="number" id="phone_number" className="form-control"/>
              <label htmlFor="phone_number">Phone Number</label>
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
}

export default CustomerForm;
