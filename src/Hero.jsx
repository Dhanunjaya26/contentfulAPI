import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS App</h1>
          <p>
            I'm baby air plant four dollar toast DIY master cleanse. Biodiesel
            snackwave meditation sus pok pok, tumblr thundercats coloring book
            gentrify try-hard. Ennui aesthetic wayfarers knausgaard swag air
            plant seitan adaptogen intelligentsia gl mossier{" "}
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero image" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
