import React from "react";
import "./Sections.css";
import feature1 from "../../images/feature1.jpg";
import feature2 from "../../images/feature2.jpg";
import feature3 from "../../images/feature3.jpg";

function Sections() {
  return (
    <div className="row justify-content-evenly pt-3 pb-3 ">
      <div className="col-lg-3 text-center mt-5 background rounded">
        <img
          src={feature1}
          alt="section1"
          className="imageSize pt-3 pb-4 img-fluid"
        />
        <h5>Efficient code</h5>
        <p className="pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nulla optio incidunt repudiandae laborum aspernatur modi, commodi
          molestias minus magnam, neque inventore at perspiciatis omnis, maxime
          pariatur similique quod suscipit.
        </p>
      </div>

      <div className="col-lg-3 text-center mt-5 background rounded">
        <img
          src={feature2}
          alt="section1"
          className="imageSize pt-3 pb-4 img-fluid"
        />
        <h5>Efficient code</h5>
        <p className="pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nulla optio incidunt repudiandae laborum aspernatur modi, commodi
          molestias minus magnam, neque inventore at perspiciatis omnis, maxime
          pariatur similique quod suscipit.
        </p>
      </div>

      <div className="col-lg-3 text-center mt-5 background rounded">
        <img
          src={feature3}
          alt="section1"
          className="imageSize pt-3 pb-4 img-fluid"
        />
        <h5>Efficient code</h5>
        <p className="pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nulla optio incidunt repudiandae laborum aspernatur modi, commodi
          molestias minus magnam, neque inventore at perspiciatis omnis, maxime
          pariatur similique quod suscipit.
        </p>
      </div>
    </div>
    // ====================================================================================================================================================================================================
  );
}

export default Sections;
