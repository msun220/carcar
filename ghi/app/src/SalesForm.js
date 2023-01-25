import React, { useState, useEffect } from 'react'

function SalesForm () {

    const [salesPersons, setSalesPersons] = useState([])
    const [customers, setCustomers] = useState([])
    const [automobiles, setAutomobiles] = useState([])

    const fetchEmployee = async () => {
        const url = 'http://localhost:8090/api/employees/';
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          setSalesPersons(data.employees);
        }
    }

    const fetchCustomer = async () => {
        const url = 'http://localhost:8090/api/customers/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers);
        }
    }

    const fetchAutomobile = async () => {
        const url = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          const availableAutos = data.autos.filter(automobile => automobile.status === "AVAILABLE")
          setAutomobiles(availableAutos)
        }
    }

    useEffect(()=> {fetchCustomer();}, [])
    useEffect(()=> {fetchAutomobile();}, [])
    useEffect(()=> {fetchEmployee();}, [])


    const [salePrice, setSalePrice] = useState("")
    const handleSalePriceChange = (e) => {
        setSalePrice(e.target.value)
    }
    const [salesPerson, setSalesPerson] = useState("")
    const handleSalePersonChange = (e) => {
        setSalesPerson(e.target.value)
    }
    const [customer, setCustomer] = useState("")
    const handleCustomerChange = (e) => {
        setCustomer(e.target.value)
    }
    const [automobile, setAutomobile] = useState("")
    const handleAutomobileChange = (e) => {
        setAutomobile(e.target.value)
    }

    const sellAuto = async (href) => {
        const value = href
        const url = 'http://localhost:8100' + value + 'sell/'
        const fetchConfig = {
            method: "put",
            headers: {'Content-Type': 'application/json'}
        }
        const response = await fetch(url, fetchConfig)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}
        data.sale_price = salePrice
        data.sales_person_id = salesPerson
        data.customer_id = customer
        data.automobile = automobile

        const salesUrl = "http://localhost:8090/api/sales/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const salesResponse = await fetch(salesUrl, fetchConfig)

        if (salesResponse.ok) {
            setSalesPerson("")
            setCustomer("")
            setAutomobile("")
            setSalePrice("")
            await sellAuto(automobile)
            fetchAutomobile()
        }
    }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Record a sale</h1>
          <form onSubmit={handleSubmit} id="create-customer-form">
            <div className="mb-3">
              <select onChange={handleCustomerChange} value={customer} placeholder="Customer Name" required name="customer" className="form-select" >
              <option value="">Choose a customer</option>
                {customers.map(customer => {
                  return (
                    <option key={customer.id} value={customer.id}>
                        {customer.name}
                    </option>
                  )
                })}
                </select>
            </div>
            <div className="mb-3">
              <select onChange={handleSalePersonChange} value={salesPerson} placeholder="Sales Associate" required name="sales_person" type="text" id="sales_person" className="form-select" >
              <option value="">Choose a Sales Associate</option>
                {salesPersons.map(salesPerson => {
                  return (
                    <option key={salesPerson.id} value={salesPerson.id}>
                        {salesPerson.name}
                    </option>
                  )
                })}
                </select>
            </div>
            <div className="mb-3">
              <select onChange={handleAutomobileChange} value={automobile} placeholder="Automobile" required name="automobile" type="text" id="automobile" className="form-select" >
              <option value="">Choose an Automobile</option>
                {automobiles.map(automobile => {
                  return (
                    <option key={automobile.href} value={automobile.href}>
                        {automobile.vin}
                    </option>
                  )
                })}
                </select>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleSalePriceChange} value={salePrice} placeholder="Sale Price" required name="sale_price" type="number" id="sale_price" className="form-control" />
              <label htmlFor="sale_price">Sale Price</label>
            </div>
            <button className="btn btn-primary">Record</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SalesForm
