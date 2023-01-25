import { useState, useEffect } from "react";

function SalesHistory() {


  const [searchSalesPerson, setSearchSalesPerson] = useState("")
  const handleSearchSalesPersonChange = (e) => {
      setSearchSalesPerson(e.target.value)
  }

  const [salesPersons, setSalesPersons] = useState([]);
  const fetchSalesPersons = async () => {
      const url = 'http://localhost:8090/api/employees/';
      const response = await fetch(url);

      if (response.ok) {
          const data = await response.json();
          setSalesPersons(data.employees);
      }
  }

  useEffect(() => {
      fetchSalesPersons();
  }, []);

  const [searchedSales, setSearchedSales] = useState([]);
  const searchSales = async () => {
    const selectedSalesPerson = salesPersons.find(salesPerson => salesPerson.id === searchSalesPerson);
    const url = `http://localhost:8090/api/sales?sales_person=${selectedSalesPerson.name}`;
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        setSearchedSales(data.sales);
    }
}


  return (
    <div className="mb-3">
        <select value={searchSalesPerson} onChange={handleSearchSalesPersonChange}>
            <option value="" disabled>Select Sales Person</option>
            {salesPersons.map(salesPerson => (
                <option key={salesPerson.id} value={salesPerson.id}>
                    {salesPerson.name}
                </option>
            ))}
        </select>
        <button onClick={searchSales}>Search</button>
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
                {searchedSales.map(sale => (
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
)
}

export default SalesHistory
