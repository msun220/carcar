import React, { useState, useEffect } from "react";


function SalesHistory() {
  const [salesPeople, setSalesPeople] = useState([]);
  const fetchSalesPeople = async () => {
    const response = await fetch("http://localhost:8090/api/employees/");
    const salesPersonData = await response.json();
    setSalesPeople(salesPersonData.employees);
  };

  useEffect(() => {
    fetchSalesPeople();
  }, []);

  const [sales, setSales] = useState([]);
  const fetchSales = async () => {
    const response = await fetch("http://localhost:8090/api/sales/");
    const data = await response.json();
    setSales(data.sales);
  };

  useEffect(() => {
    fetchSales();
  }, []);

  const [filterValue, setFilterValue] = useState("");
  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const searchSales = () => {
    if (filterValue === "") {
      return sales;
    } else {
      return sales.filter((sale) =>
        sale.sales_person.name.includes(filterValue)
      );
    }
  };

  return (
    <>
      <div id="carousel" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://cdn-ds.com/blogs-media/sites/215/2020/12/31173655/Friendly-Salary-Paid-Salesman-Speaking-with-Happy-Client-at-No-Commission-Dealership-_A_b.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="https://www.uticanational.com/contentassets/d2a486dc93c3491e9d254b63825efe63/auto-dealers-banner-1600-550.jpg?w=800" className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
      </div>
    <div className="container" style={{ paddingTop: 40}}>
      <div className="pt-4">
        <h1 className="pb-2">Sales History </h1>
        <div className="mb-3 pt-3">
          <form>
            <select className="form-select" onChange={handleFilterValueChange}>
              <option value="">Select a sales associate</option>
              {salesPeople.map((person) => (
                <option key={person.id} value={person.name}>
                  {person.name}
                </option>
              ))}
            </select>
          </form>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Sale Person</th>
                <th>Customer</th>
                <th>Vin</th>
                <th>Sale Price</th>
              </tr>
            </thead>
            <tbody>
              {searchSales().map((sale) => (
                <tr key={sale.id}>
                  <td>{sale.sales_person.name}</td>
                  <td>{sale.customer}</td>
                  <td>{sale.automobile.vin}</td>
                  <td>{sale.sale_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}

export default SalesHistory;
