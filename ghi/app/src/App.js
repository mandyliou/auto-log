import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehiclesList from './VehiclesList'
import VehiclesForm from './VehiclesForm'

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


        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
