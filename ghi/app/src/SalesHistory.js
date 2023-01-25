import { useState, useEffect } from "react"

function SalesHistory() {

  const [searchSalesPerson, setSearchSalesPerson] = useState([])


  const [filterValue, setFilterValue] = useState("")
  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value)
  }

  const [sales, setSales] = useState([])
  const [allSales, setAllSales] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:8090/api/sales/")
    const data = await response.json()

    setSales(data.sales)
    console.log(sales)
  }

  useEffect(() => {
    fetchData()
  }, [])


  const fetchSalesPerson = async () => {
    const response = await fetch("http://localhost:8090/api/employees/")
    const salesPersonData = await response.json()
    setSearchSalesPerson(salesPersonData.employees)
  }

  useEffect(() => {
    fetchSalesPerson()
  }, [])


  const searchSales = () => {
    if (searchSalesPerson === "") {
      return sales }
  //   } else {
  //     return sales.filter(sale =>
  //       sale.name.includes(filterValue)
  //     )
  //   }
  // }



  return (
    <div className="mb-3">
        <select onChange={handleFilterValueChange}>
          <option value="">Select a sales associate</option>
            {searchSales().map(person => (
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
                {sales.map(sale => (
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
}

export default SalesHistory
