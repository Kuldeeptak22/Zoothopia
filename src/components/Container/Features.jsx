import React from "react";
import Feature1 from "../../images/feature1.jpg";
import Feature2 from "../../images/feature2.jpg";
import Feature3 from "../../images/feature3.jpg";
import "./Features.css";

function Features() {
  return (
    <div className="row pt-5 pb-5 justify-content-evenly ">
      <div className="col-md-3 text-center shadowbox mt-4">
        <div className="card grayBackground">
          <img src={Feature1} className="card-img-top" alt="feature1" />
          <div className="card-body ">
            <h5 className="card-title fw-bold">They Need Your Love </h5>
            <p className="card-text">
              We are here to turn the forest into a home, and make peace with
              all creatures. Never be embarrassed by how much you care about
              animals and how they're treated
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 text-center shadowbox mt-4">
        <div className="card grayBackground">
          <img src={Feature2} className="card-img-top " alt="feature2" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Intelligent Dolphins</h5>
            <p className="card-text">
              Dolphins are capable of complex problem solving and social
              interaction. They are one of the smartest animals in the world.
              They have large and complex brains that developed over thousands
              of generations.
            </p>
          </div>
        </div>
      </div>

      <div className=" col-md-3 text-center shadowbox mt-4">
        <div className="card grayBackground">
          <img src={Feature3} className="card-img-top" alt="feature3" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Underwater Fish Aquarium</h5>
            <p className="card-text">
              This is India’s first and largest walk-through aquarium housing
              everything from small to big aquatic animals.Visit this place and
              see the beauty of an Ocean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
