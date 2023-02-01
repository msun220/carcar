import { NavLink } from 'react-router-dom';


function MainPage() {
  return (
    <div className="carousel-inner">
      <img src='https://wallpaperaccess.com/full/2503410.jpg' className='opacity-50 w-100' />
      <div className="carousel-caption d-none d-md-block text-start text-dark h-100" style={{ width: "800px", height: "640px", top: "0px", bottom: "0px", left: "50px", right: "0px"}}>
        <h1>CarCar</h1>
      </div>
      <div className="carousel-caption d-none d-md-block justify-content-center h-100 pt-5">
        <div className="container" style={{ width: "600px"}}>
          <div className="row">
            <div className="col">
            <div className="dropdown">
            <button className="btn text-dark dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Members
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
            </div>
            <div className="col">
            <div className="dropdown">
            <button className="btn text-dark dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Manufacturers
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="manufacturers">Manufacturers List</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="manufacturers/new">New Manufacturer</NavLink>
              </li>
            </ul>
          </div>
            </div>
            <div className="col">
            <div className="dropdown">
            <button className="btn text-dark dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Models
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="vehicles">Vehicle List</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="vehicles/new">New Vehicle</NavLink>
              </li>
            </ul>
          </div>
            </div>
            <div className="col">
            <div className="dropdown">
            <button className="btn text-dark dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Vehicles
            </button>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="automobiles">Automobile List</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" aria-current="page" to="automobiles/new">New Automobile</NavLink>
              </li>
            </ul>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-caption d-none d-md-block h-75">
        <h2 className="text-dark display-2">Welcome Back Sabina!</h2>
      </div>
      <div className="carousel-caption d-none d-md-block justify-content-center h-50 pb-5">
        <div className="container" style={{ width: "800px", height: "600px"}}>
          <div className="row">
            <div className="col">
              <button type="button" style={{ width: "200px", height: "120px",}} className="btn bg-light p-2 text-dark bg-opacity-75 fs-4">
              <NavLink className="text-decoration-none text-dark" aria-current="page" to="sales/new">New Sale</NavLink>
              </button>
            </div>
            <div className="col">
              <button type="button" style={{ width: "200px", height: "120px",}} className="btn bg-light p-2 text-dark bg-opacity-75 fs-4">
              <NavLink className="text-decoration-none text-dark" aria-current="page" to="sales">Sales</NavLink>
              </button>
            </div>
            <div className="col">
              <button type="button" style={{ width: "200px", height: "120px",}} className="btn bg-light p-2 text-dark bg-opacity-75 fs-4">
              <NavLink className="text-decoration-none text-dark" aria-current="page" to="sales/history">Sales By Employee</NavLink>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{paddingTop: 40, }}>
              <button type="button" style={{ width: "200px", height: "120px",}} className="btn bg-light p-2 text-dark bg-opacity-75 fs-4">
              <NavLink className="text-decoration-none text-dark" aria-current="page" to="appointments/new">New Appointment</NavLink>
              </button>
            </div>
            <div className="col" style={{paddingTop: 40, }}>
              <button type="button" style={{ width: "200px", height: "120px",}} className="btn bg-light p-2 text-dark bg-opacity-75 fs-4">
              <NavLink className="text-decoration-none text-dark" aria-current="page" to="appointments">Appointments</NavLink>
              </button>
            </div>
            <div className="col" style={{paddingTop: 40, }}>
              <button type="button" style={{ width: "200px", height: "120px",}} className="btn bg-light p-2 text-dark bg-opacity-75 fs-4">
              <NavLink className="text-decoration-none text-dark" aria-current="page" to="appointments/history">Appointments by Technician</NavLink>
              </button>
            </div>
          </div>
      </div>
      </div>
      </div>
  );
}

export default MainPage;
