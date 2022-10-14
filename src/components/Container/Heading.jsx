import React from "react";

function Heading(props) {
  return (
    <div className="row">
      <div
        className="col-12"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}
      >
        <p
          className="fs-2 text-center mt-5 mb-4 fw-bold"
          style={{ color: "gray" }}
        >
          {props.paragraph1}
          {props.paragraph2}
        </p>
      </div>
    </div>
  );
}

export default Heading;
