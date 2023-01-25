import { useState, useEffect } from "react"

function SalesHistory() {

  const [salesPeople, setSalesPeeople] = useState([])
  const fetchSalesPerson = async () => {
    const response = await fetch("http://localhost:8090/api/employees/")
    const salesPersonData = await response.json()
    setSalesPeeople(salesPersonData.employees)
  }

  useEffect(() => {
    fetchSalesPerson()
  }, [])

  const [sales, setSales] = useState([])
  const fetchSales = async () => {
    const response = await fetch("http://localhost:8090/api/sales/")
    const data = await response.json()
    setSales(data.sales)
  }

  useEffect(() => {
    fetchSales()
  }, [])


  const [filterValue, setFilterValue] = useState("")
  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value)
  }


  const searchSales = () => {
    if (filterValue === "") {
      return sales
    } else {
      return sales.filter(sale => sale.sales_person.name.includes(filterValue))
    }
  }


  return (
    <div className="mb-3">
        <select onChange={handleFilterValueChange}>
          <option value="">Select a sales associate</option>
            {salesPeople.map(person => (
              <option key={person.id} value={person.name}>
                {person.name}
              </option>
            ))}
        </select>
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
                {searchSales().map(sale => (
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
