import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Main_Layout';
import Home from './pages/home';
import RoomPage from './pages/room';
import Signup from './pages/signup';
import Login from './pages/login';
import RoomDescription from './pages/room_detail';
import Tenant from './pages/tenant';
import Booking from './pages/booking';
import Payment from './pages/payment';
import AboutUs from './pages/about_us';
import ContactUs from './pages/contact_us';
import Dashboard from './pages/dashboard';
import EditTenant from './pages/edit_tenant';
import BypassCodePage from './pages/unlockSession'; 
import HeroSection from './pages/heroSection';
import Ticket from './pages/ticket';
import EventPage from './pages/event';
import Facilities from './pages/facilities'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} /> {/* Set HeroSection as the landing page */}
        <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/room/:hostelName" element={<MainLayout><RoomPage /></MainLayout>} />
        <Route path="/signup" element={<MainLayout><Signup /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        <Route path="/room_detail/:roomNumber/:hostelName" element={<MainLayout><RoomDescription /></MainLayout>} />
        <Route path="/tenant" element={<MainLayout><Tenant /></MainLayout>} />
        <Route path="/booking" element={<MainLayout><Booking /></MainLayout>} />
        <Route path="/payment" element={<MainLayout><Payment /></MainLayout>} /> 
        <Route path="/about_us" element={<MainLayout><AboutUs /></MainLayout>} />
        <Route path="/contact_us" element={<MainLayout><ContactUs /></MainLayout>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit_tenant" element={<EditTenant />} />
        <Route path="/unlockSession" element={<BypassCodePage />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/event" element ={<EventPage/>}/>
        <Route path="/facilities" element ={<Facilities/>}/>
        </Routes>
    </Router>
  );
}

export default App;
