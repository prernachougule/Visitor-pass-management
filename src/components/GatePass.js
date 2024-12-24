import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./GatePass.css";

function GatePass({ visitor }) {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="gate-pass-container">
      <div ref={componentRef} className="gate-pass">
        <h2>Gate Pass</h2>
        <p><strong>Name:</strong> {visitor.name}</p>
        <p><strong>Contact:</strong> {visitor.contact}</p>
        <p><strong>Purpose:</strong> {visitor.purpose}</p>
        <p><strong>Date:</strong> {visitor.date}</p>
      </div>
      <button onClick={handlePrint} className="print-button">Print Gate Pass</button>
    </div>
  );
}

export default GatePass;
