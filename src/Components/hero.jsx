import React from "react";
import heroImage from "../assets/office-hero.png";

const Hero = () => {
  // Using a placeholder image that resembles the chaotic paper background
  return (
    <div className="relative h-96 w-full bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-black bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tighter">
          Limitless paper in
          <br />a paperless world
        </h1>
        <p className="text-gray-200 text-sm md:text-lg mb-4 leading-tight">
          High-quality paper for businesses that still <br></br>
          believe in printers and organization.
        </p>
        <button className="bg-white text-black px-12 py-3 rounded-lg font-medium hover:bg-gray-100 transition transform hover:scale-105">
          Talk to Sales
        </button>
      </div>
    </div>
  );
};

export default Hero;
