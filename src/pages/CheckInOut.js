import React, { useState } from "react";
import "./CheckInOut.css";

function CheckInOut() {
  const [log, setLog] = useState({ id: "", type: "check-in" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLog({ ...log, [name]: value });
  };

  const handleSubmit = () => {
    console.log(`${log.type} log created for ID: ${log.id}`);
    alert(`${log.type} logged successfully!`);
  };

  return (
    <div className="log-container">
      <h2>Check-In/Check-Out</h2>
      <form>
        <input
          type="text"
          name="id"
          placeholder="Visitor/Employee ID"
          onChange={handleInputChange}
          required
        />
        <select name="type" onChange={handleInputChange} value={log.type}>
          <option value="check-in">Check-In</option>
          <option value="check-out">Check-Out</option>
        </select>
        <button type="button" onClick={handleSubmit}>
          Submit Log
        </button>
      </form>
    </div>
  );
}

export default CheckInOut;
