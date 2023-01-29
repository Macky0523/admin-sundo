import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../pages/Dashboard.jsx';
import Customer from '../pages/Customer';
import Driver from '../pages/Driver.jsx';
import Reports from '../pages/Reports.jsx';
import Bookings from '../pages/Bookings';
import Unpaid from '../pages/Unpaid';


const Webroutes = () => {
    return (
      
     
        <Sidebar>
          <Routes>
            
          <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Customer" element={<Customer />} />
            <Route path="/Driver" element={<Driver />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path = "/Bookings" element={<Bookings/>}/>
            <Route path = "/Unpaid" element={<Unpaid/>}/>

          </Routes>
        </Sidebar>
     
    );
  };
  
  
  
  
  export default Webroutes;


  //<Route path = '/login' element={<LoginForm/>}/>