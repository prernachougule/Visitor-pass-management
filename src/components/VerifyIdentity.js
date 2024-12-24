import React, { useState } from "react";
import "./VerifyIdentity.css";

function VerifyIdentity() {
  const [visitorId, setVisitorId] = useState("");

  const handleVerify = () => {
    alert(`Visitor ID ${visitorId} verified!`);
  };

  return (
    <div className="verify-container">
      <h2>Verify Identity</h2>
      <input
        type="text"
        placeholder="Enter Visitor ID"
        value={visitorId}
        onChange={(e) => setVisitorId(e.target.value)}
      />
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
}

export default VerifyIdentity;
