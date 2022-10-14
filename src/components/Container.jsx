import React from "react";
import Features from "./Container/Features";
import Heading from "./Container/Heading";
import Banner from "./Container/Banner";
import Booking from "./Container/Booking";
import Footer from "./Container/Footer";
import Copyright from "./Container/Copyright";

function Container() {
  return (
    <div className="container-fluid">
      <Heading paragraph1="Visit the zoo and see the animals before they have vanished." />
      <Features />
      <Banner />
      <Booking />
      <Heading paragraph2="Wildlife in the world can only be protected by the love of compassionate hearts in the world!" />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Container;
