import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/dashboard';
import Inventory from './pages/inventory';
import Storage from './pages/storage';
import Retrieval from './pages/retrivel';
import Alerts from './pages/alerts';
import Analytics from './pages/analytics';
import Settings from './pages/settings';
import Login from './pages/login';
import Signup from './pages/signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <div className="main-content">
          <Routes>
            {/* Main Dashboard */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Inventory Management */}
            <Route path="/inventory" element={<Inventory />} />
            
            {/* Storage Optimization */}
            <Route path="/storage" element={<Storage />} />
            
            {/* Item Retrieval */}
            <Route path="/retrivel" element={<Retrieval />} />
            
            {/* Alerts & Notifications */}
            <Route path="/alerts" element={<Alerts />} />
            
            {/* Analytics & Reports */}
            <Route path="/analytics" element={<Analytics />} />
            
            <Route path="/settings" element={<Settings />} />
            
            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        
        {/* You can add a Footer component here if needed */}
      </div>
    </Router>
  );
}

export default App;