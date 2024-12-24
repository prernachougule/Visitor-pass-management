// HomePage.js
import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1 className="main-title">Welcome to the Visitor Pass Management System!</h1>
        <p className="subtext">
          Efficiently manage visitor registration, gate pass issuance, identity verification, and more.
        </p>
        <div className="cta-buttons">
          <button className="cta-button">Get Started</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </header>

      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>Secure</h3>
            <p>Ensuring the safety of your premises with advanced identity verification.</p>
          </div>
          <div className="feature">
            <h3>Efficient</h3>
            <p>Streamline visitor management for a seamless experience.</p>
          </div>
          <div className="feature">
            <h3>User-Friendly</h3>
            <p>Easy-to-use interface for administrators and visitors alike.</p>
          </div>
        </div>
      </section>

      <footer className="homepage-footer">
        <p>&copy; 2024 Visitor Pass Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
