import '../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from '../components/Auth/login';
import Dashboard from './Dashboard';
import Customer from './Customer';
import Driver from './Driver';
import Reports from './Reports';
import Booking from './Bookings';
import Unpaid from './Unpaid';
import Sidebar from '../components/Sidebar'


const HOME = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Customer" element={<Customer/>} />
          <Route path="/Driver" element={<Driver/>} />
          <Route path="/Reports" element={<Reports/>} />
          <Route path = "/Bookings" element={<Booking/>}/>
          <Route path = "/Unpaid" element={<Unpaid/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default HOME;