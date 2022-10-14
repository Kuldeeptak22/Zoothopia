import React from "react";
import { Carousel } from "bootstrap";
import WhiteTiger from "../images/White tiger.png";
import Gorilla from "../images/gorilla.png";
import Whitebear from "../images/white bear.png";
import Rhino from "../images/Rhino.png";
import WhiteFox from "../images/white fox.png";
import Elephant from "../images/elephant.png";
import WhiteDeer from "../images/white deer.png";
import Lioness from "../images/lioness.png";
import Zebra from "../images/Zebra.png";
import Croco from "../images/Croco.png";

function Slider() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade mb-5"
        data-bs-ride="carousel"
        style={{ boxShadow: "4px 4px 8px grey" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={WhiteTiger} className="d-block w-100" alt="WhiteTiger" />
            <div className="carousel-caption d-none d-md-block">
              <h5>White Tiger</h5>
              <p>
                Over the past couple of centuries the White Tiger has become
                even rarer in the wild due to trophy hunting or capture for the
                exotic pet trade, with there having been no recorded sightings
                of these elusive predators for the past 50 years.
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src={Gorilla} className="d-block w-100" alt="Gorilla" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Gorillas</h5>
              <p>
                Gorillas are critically endangered in the wild and not given
                sufficient autonomy or natural surroundings in captivity.
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src={Whitebear} className="d-block w-100" alt="Whitebear" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Polar Bear</h5>
              <p>
                The polar bear is a hypercarnivorous bear whose native range
                lies largely within the Arctic Circle, encompassing the Arctic
                Ocean, its surrounding seas and surrounding land masses
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src={Rhino} className="d-block w-100" alt="Rhino" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Rhinoceros</h5>
              <p>
                rhinoceros species of giant horn-bearing herbivores that include
                some of the largest living land mammals.
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src={WhiteFox} className="d-block w-100" alt="WhiteFox" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Arctic fox</h5>
              <p>
                The main prey in the tundra are lemmings, which is why the white
                fox is often called the "lemming fox". The white fox's
                reproduction rates reflect the lemming population density, which
                cyclically fluctuates every 3-5 years.
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src={Elephant} className="d-block w-100" alt="Elephant" />
            <div className="carousel-caption d-none d-md-block">
              <h5> Elephants</h5>
              <p>
                Elephants are the largest existing land animals. Three living
                species are currently recognised: the African bush elephant, the
                African forest elephant, and the Asian elephant.
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src={WhiteDeer} className="d-block w-100" alt="WhiteDeer" />
            <div className="carousel-caption d-none d-md-block">
              <h5>White Deer</h5>
              <p>
                White deer are ordinary white-tailed deer with an extraordinary
                color. They are white or mostly white in color. The color is a
                genetic trait and is inherited but is extremely rare.
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src={Lioness} className="d-block w-100" alt="Lioness" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Lioness</h5>
              <p>
                A queen in her own right, the lioness is the ideal model of
                tenderness and fierceness that women will ever find. She depicts
                a magnificent image of beauty and strength.
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src={Zebra} className="d-block w-100" alt="Zebra" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Zebra</h5>
              <p>
                Zebras are primarily grazers and can subsist on lower-quality
                vegetation. They are preyed on mainly by lions and typically
                flee when threatened but also bite and kick.
              </p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src={Croco} className="d-block w-100" alt="Croco" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Crocodiles</h5>
              <p>
                Crocodiles or true crocodiles are large semiaquatic reptiles
                that live throughout the tropics in Africa, Asia, the Americas
                and Australia
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
