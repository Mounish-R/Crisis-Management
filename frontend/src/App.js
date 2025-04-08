import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import ReportCrisis from './pages/ReportCrisis';
import CrisisMap from './pages/CrisisMap';
import Volunteer from './pages/Volunteer';
import Resources from './pages/Resources';
import Notifications from './pages/Notifications';
 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/report" element={<ReportCrisis />} />
          <Route path="/map" element={<CrisisMap />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/notifications" element={<Notifications />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
