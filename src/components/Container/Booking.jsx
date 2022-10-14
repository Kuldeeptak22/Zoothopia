import React from "react";
import "./Booking.css";

function Booking() {
  return (
    <div>
      <div className="card text-center booking text-white mb-4">
        <div className="card-header fs-2 fw-bold">Book Your Ticket</div>
        <div className="card-body">
          <h5 className="card-title">Special Offers For Students</h5>
          <p className="card-text">
            Click on the button below and book your ticket
          </p>
          <a href="#" className="btn btn-secondary">
            Book Your Ticket
          </a>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </div>
  );
}

export default Booking;
