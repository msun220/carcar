import { useEffect, useState } from "react";


function SalesList() {
  const [sales, setSales] = useState([]);
  const getData = async () => {
    const response = await fetch("http://localhost:8090/api/sales/");
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="container" style={{ paddingTop: 40}}>
      <div className="pt-4">
        <h1 className="pb-2">All Sales</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Sales Associate</th>
              <th>Employee Number</th>
              <th>Purchaser Name</th>
              <th>VIN</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => {
              return (
                <tr key={ sale.id }>
                  <td>{ sale.sales_person.name}</td>
                  <td>{ sale.sales_person.employee_number }</td>
                  <td>{ sale.customer }</td>
                  <td>{ sale.automobile.vin }</td>
                  <td>{ sale.sale_price }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default SalesList;
