import React from 'react';
import { Link } from 'react-router-dom';

const Taskbar = () => {
  return (
    <nav className="taskbar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/timetable">Time Table</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
      </ul>
    </nav>
  );
};

export default Taskbar;