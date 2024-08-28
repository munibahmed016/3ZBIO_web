import React from "react";
import "./HealthMonitor.css"; 
import BPChecker from "../../assets/multiflex_6in1.png";
import Acuteck from "../../assets/multigx_6in1-2.png";
import Red from "../../assets/ghe-2in1.jpg"

const HealthMonitor = () => {
  return (
    <div className="health-monitor">
      <div className="container text-center">
        <h1>Track your Health with Ease</h1>
        <p>Rapid, Reliable, Accurate, and Economical Monitors</p>
        <button className="btn btn-primary">Learn More</button>
      </div>

      <div className="chronic-disease-series">
        <h3>Chronic Disease Series</h3>
        <div className="products row">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="product-card">
              <img
                src={Acuteck}
                alt="Multi 6 in 1 Multi-Monitoring System"
              />
              <button className="btn btn-outline-primary">Shop now</button>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="product-card">
              <img
                src={BPChecker}
                alt="MultiFlex 6 in 1 with BP & Pulse Test"
              />
              <button className="btn btn-outline-primary">Shop now</button>
            </div>
          </div>
        </div>

        {/* Repeat similar blocks for each product */}
        <div className="product-grid row">
          <div className="col-md-4 mb-4">
            <div className="product-card">
              <img
                src={Red}
                alt="3 in 1 - Blood Glucose, Uric Acid, and Total Cholesterol Monitor"
              />
              <p>3 in 1 - Blood Glucose, Uric Acid, and Total Cholesterol Monitor</p>
              <button className="btn btn-outline-primary">Shop now</button>
            </div>
          </div>
          {/* Add more products in similar blocks */}
        </div>
      </div>
    </div>
  );
};

export default HealthMonitor;
