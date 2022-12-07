import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehiclesList from './VehiclesList'
import VehiclesForm from './VehiclesForm'
import ManufacturerForm from './ManufacturerForm'
import ManufacturerList from './ManufacturerList';
import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobileList';

function App() {
  // if( props.models === undefined) {
  //   return null;
  // }
  return (

    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="vehicle" element={<VehiclesList />} />
          <Route path="vehicle/new" element={<VehiclesForm />} />
          <Route path="manufacturers" element={<ManufacturerList/> } />
          <Route path="manufacturers/new" element={<ManufacturerForm />} />
          <Route path="automobiles/new" element={<AutomobileForm />} />
          <Route path="automobiles/" element={<AutomobileList />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
