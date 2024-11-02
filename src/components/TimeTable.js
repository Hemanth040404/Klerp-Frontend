// src/components/TimeTable.js
import React from 'react';
import Taskbar from './Taskbar';

const TimeTable = () => {
  return (
    <div>
      <Taskbar />
      <div className="welcome-content">
        <h2>Time Table</h2>
        {/* Add your time table content here */}
      </div>
    </div>
  );
};

export default TimeTable;