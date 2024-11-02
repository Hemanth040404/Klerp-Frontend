import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import TimeTable from './components/TimeTable';
import Attendance from './components/Attendance';
import Login from './components/Login';
import './styles/Taskbar.css';

function App() {
  // You'll need to implement authentication state management
  const isAuthenticated = false; // Replace with actual auth state

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/home" /> : <Login />} 
        />
        <Route 
          path="/home" 
          element={isAuthenticated ? <WelcomePage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/timetable" 
          element={isAuthenticated ? <TimeTable /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/attendance" 
          element={isAuthenticated ? <Attendance /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/" 
          element={<Navigate to="/home" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;