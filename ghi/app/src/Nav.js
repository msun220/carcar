import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
<<<<<<< HEAD
            <div className="dropdown">
              <button
                className="btn text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="manufacturers"
                  >
                    Manufacturers List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="manufacturers/new"
                  >
                    New Manufacturer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="vehicles"
                  >
                    Vehicle List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="vehicles/new"
                  >
                    New Vehicle
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="automobiles"
                  >
                    Automobile List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="automobiles/new"
                  >
                    New Automobile
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                New Members
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="customer/new"
                  >
                    New Customer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="salesperson/new"
                  >
                    New Sales Associate
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="technician/new"
                  >
                    New Technician
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="sales/new"
                  >
                    New Sale
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="sales"
                  >
                    Sales Records
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="sales/history"
                  >
                    Sales By Employee
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Appointments
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="appointments/new"
                  >
                    New Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="appointments"
                  >
                    Appointment List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="appointments/history"
                  >
                    Appointment History
                  </NavLink>
                </li>
              </ul>
            </div>
=======
          <div className="dropdown">
            <button className="btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="manufacturers">Manufacturers List</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="manufacturers/new">New Manufacturer</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="vehicles">Vehicle List</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="vehicles/new">New Vehicle</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="automobiles">Automobile List</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="automobiles/new">New Automobile</NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              New Members
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="customer/new">New Customer</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="salesperson/new">New Sales Associate</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="technician/new">New Technician</NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="sales/new">New Sale</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="sales">Sales Records</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="sales/history">Sales By Employee</NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Appointments
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="appointments/new">New Appointment</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="appointments">Appointment List</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="appointments/history">Appointment History</NavLink>
              </li>
            </ul>
          </div>
>>>>>>> sabina
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
