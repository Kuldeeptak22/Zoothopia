import React from "react";
import "./Banner.css";
import Zoo from "../../images/zoo.jpg";

function Banner() {
  return (
    <div className="row mt-5 mb-5 pt-5">
      <div className="col-12 ">
        <img
          src={Zoo}
          alt="zoo"
          className="zoo img-fluid"
          style={{ boxShadow: "4px 4px 8px grey" }}
        />
      </div>
    </div>
  );
}
export default Banner;
