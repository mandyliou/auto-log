import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehiclesList from './VehiclesList'
import VehiclesForm from './VehiclesForm'
import SalesPersonForm from "./SalesPersonForm"
import SalesPersonList from "./SalesPersonList"
import CustomersForm from './CustomersForm'
// import CustomersList from './CustomersList'
import SalesRecordsForm from './SalesRecordsForm'
import SalesRecordsList from './SalesRecordsList'




function App() {

  return (

    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="vehicle" element={<VehiclesList />} />
          <Route path="vehicle/new" element={<VehiclesForm />} />
          <Route path="salesperson" element={<SalesPersonList />} />
          <Route path="salesperson/new" element={<SalesPersonForm />} />
          {/* <Route path="customer" element={<CustomersList />} /> */}
          <Route path="customer/new" element={<CustomersForm />} />
          <Route path="salesrecord" element={<SalesRecordsList />} />
          <Route path="salesrecord/new" element={<SalesRecordsForm />} />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
