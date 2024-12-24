import React, { useState } from "react";
import "./VisitorRegistration.css";

function VisitorRegistration() {
  const [visitor, setVisitor] = useState({
    name: "",
    contact: "",
    purpose: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVisitor({ ...visitor, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Visitor registered:", visitor);
    alert("Visitor registered successfully!");
  };

  return (
    <div className="form-container">
      <h2>Visitor Registration</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={visitor.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={visitor.contact}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="purpose"
          placeholder="Purpose of Visit"
          value={visitor.purpose}
          onChange={handleInputChange}
          required
        ></textarea>
        <input
          type="date"
          name="date"
          value={visitor.date}
          onChange={handleInputChange}
          required
        />
        <button type="button" onClick={handleSubmit}>
          Register Visitor
        </button>
      </form>
    </div>
  );
}

export default VisitorRegistration;
