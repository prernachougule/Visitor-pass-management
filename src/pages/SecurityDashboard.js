import React from "react";
import "./SecurityDashboard.css";

function SecurityDashboard({ visitors }) {
  return (
    <div className="dashboard-container">
      <h2>Security Dashboard</h2>
      <ul>
        {visitors.map((visitor, index) => (
          <li key={index}>
            {visitor.name} - {visitor.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecurityDashboard;
