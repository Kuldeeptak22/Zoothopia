import React from "react";

function Footer() {
  return (
    <div className="row justify-content-evenly bg-dark text-white pt-2 pb-5 mt-5">
      <div className="col-md-3 pt-4">
        <h5 className="pb-2">Zoothopia</h5>
        <p>
          'Zoothopia' takes place in a fully functional Zoo and park on Isla
          Nublar. It sees more than 20,000 visitors every day. You arrive by
          ferry from Costa Rica. It has elements of a biological preserve, a
          safari, a zoo, and a theme park. There is a luxury resort with hotels,
          restaurants, nightlife and a golf course. And there are dinosaurs.
        </p>
      </div>
      <div className="col-md-3 pt-4">
        <h5 className="pb-2">Important Links</h5>
        <p>
          <a href="#" className="link-light text-decoration-none">
            Home
          </a>
          <br />
          <a href="#" className="link-light text-decoration-none">
            About Us
          </a>
          <br />
          <a href="#" className="link-light text-decoration-none">
            Animals
          </a>
          <br />
          <a href="#" className="link-light text-decoration-none">
            Add Animals
          </a>
          <br />
          <a href="#" className="link-light text-decoration-none">
            Booking
          </a>
          <br />
          <a href="#" className="link-light text-decoration-none">
            Events
          </a>
        </p>
      </div>
      <div className="col-md-3 pt-4">
        <h5 className="pb-2">Contact US</h5>
        <p>
          Kuldeep Tak<br></br> Near Rakesh Hardware, Amli road, Sadar Bazar,
          <br />
          Pindwara, Sirohi, Rajasthan, India - 307022 <br />
          <i className="bi bi-telephone text-success"></i> : +91-9664408473
        </p>
      </div>
    </div>
  );
}

export default Footer;
