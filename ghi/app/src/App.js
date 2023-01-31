import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import CustomerForm from "./CustomerForm";
import SalesForm from "./SalesForm";
import SalesPersonForm from "./SalesPersonForm";
import SalesList from "./SalesList";
import AppointmentList from "./AppointmentList";
import AppointmentForm from "./AppointmentForm";
import TechnicianForm from "./TechnicianForm";
import SalesHistory from "./SalesHistory";
import ServiceHistory from "./ServiceHistory";
import ManufacturerList from "./ManufacturerList";
import ManufacturerForm from "./ManufacturerForm";
import AutomobileList from "./AutomobileList";
import AutomobileForm from "./AutomobileForm";
import VehicleForm from "./VehicleForm";
import VehicleList from "./VehicleList";


function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <div className="container-fluid" style={{paddingRight: 0, paddingLeft: 0}}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="customer/new" element={<CustomerForm />} />
          <Route path="salesperson/new" element={<SalesPersonForm />} />
          <Route path="technician/new" element={<TechnicianForm />} />
          <Route path="manufacturers" element={<ManufacturerList />} />
          <Route path="manufacturers/new" element={<ManufacturerForm />} />
          <Route path="automobiles" element={<AutomobileList />} />
          <Route path="automobiles/new" element={<AutomobileForm />} />
          <Route path="vehicles/new" element={<VehicleForm />} />
          <Route path="vehicles" element={<VehicleList />} />
          <Route path="appointments">
            <Route path="" element={<AppointmentList />} />
            <Route path="new" element={<AppointmentForm />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
          <Route path="sales">
            <Route path="new" element={<SalesForm />} />
            <Route path="" element={<SalesList />} />
            <Route path="history" element={<SalesHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
