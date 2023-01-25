import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CustomerForm from './CustomerForm';
import SalesForm from './SalesForm';
import SalesPersonForm from './SalesPersonForm';
import SalesList from './SalesList';
import AppointmentList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import TechnicianForm from './TechnicianForm';
import SalesHistory from './SalesHistory';import SalesHistory from './SalesHistory';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="customer/new" element={<CustomerForm />} />
          <Route path="salesperson/new" element={<SalesPersonForm />} />
          <Route path="appointment/new" element={<AppointmentForm />} />
          <Route path="appointments" element={<AppointmentList />} />
          <Route path="sale/new" element={<SalesForm />} />
          <Route path="sales" element={<SalesList />} />
          <Route path="technician/new" element={<TechnicianForm />} />
          <Route path="sales/history" element={<SalesHistory />} />
          <Route path="sales/history" element={<SalesHistory />} />
          <Route path="appointments/history" element={<ServiceHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
