import React from 'react';
import {Route, Routes } from 'react-router-dom';
import LoginForm from '../components/Auth/login';

const Loginroutes = () => {
    return (

      
        <Routes>
          <Route path = '' element={<LoginForm/>}/>
        </Routes>
     
    );
  };
  
  
  
  
  export default Loginroutes;