import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Home from './Home.jsx'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Home from './Home.jsx'; 
import VendorDashboard from './VendorDashboard.jsx'; // 1. Real Vendor Dashboard import kiya

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vendor" element={<VendorDashboard />} /> {/* 2. Active Routing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const VendorDashboard = () => <div className="p-8 text-center text-2xl font-bold text-green-600">🏪 Multi-Vendor Enterprise Control Dashboard</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
