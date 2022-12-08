import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// async function load() {
//   const response = await fetch('http://localhost:8100/api/models/');
//   const response_customer = await fetch('http://localhost:8090/api/salescustomers/');
//   if (response.ok && response_customer.ok) {
//     const data = await response.json();
//     const data_customer = await response_customer.json();
//     root.render(
//       <React.StrictMode>
//         <App models={data.models} customers={data_customer.customers}/>
//       </React.StrictMode>
//     );
//   } else {
//     console.error(response);
//   }
// }
// load();
