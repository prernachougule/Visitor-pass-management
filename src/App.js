import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import SecurityDashboard from "./pages/SecurityDashboard";
import ErrorPage from "./pages/ErrorPage";
import CheckInOut from "./pages/CheckInOut";
import VisitorRegistration from "./components/VisitorRegistration";
import GatePass from "./components/GatePass";
import VerifyIdentity from "./components/VerifyIdentity";

function App() {
  const sampleVisitor = {
    name: "John Doe",
    contact: "1234567890",
    purpose: "Meeting",
    date: "2024-12-22",
  };

  const visitors = [
    { name: "John Doe", status: "Checked-In" },
    { name: "Jane Smith", status: "Checked-Out" },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/security-dashboard" element={<SecurityDashboard visitors={visitors} />} />
        <Route path="/check-in-out" element={<CheckInOut />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/visitor-registration" element={<VisitorRegistration />} />
        <Route path="/gate-pass" element={<GatePass visitor={sampleVisitor} />} />
        <Route path="/verify-identity" element={<VerifyIdentity />} />
      </Routes>
    </Router>
  );
}


export default App;
