import React from "react";

import cheap from "../assets/cheap.png";
import customersupport from "../assets/customersup.png";
import localbranch from "../assets/localbranch.png";
import skilledemployees from "../assets/skilledemp.png";
import delivery from "../assets/delivery.png";

const WhyChooseUs = () => {
  return (
    <div className="py-8 px-4 md:px-12 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-black">
          Why Choose Dunder Mifflin ?
        </h2>
        <button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center hover:bg-gray-800 transition">
          Contact our Sales <span className="ml-2">→</span>
        </button>
      </div>

      {/* Large cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
        <div className="relative h-64 rounded-lg overflow-hidden group">
          <img
            src={localbranch}
            alt="Local Branches"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4">
            <span className="text-white font-medium">
              Local Branches, Real People
            </span>
          </div>
        </div>

        <div className="relative h-64 rounded-lg overflow-hidden group">
          <img
            src={customersupport}
            alt="Customer Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4">
            <span className="text-white font-medium">
              State of the Art Customer Support
            </span>
          </div>
        </div>
      </div>

      {/* Small cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="relative h-56 rounded-lg overflow-hidden group">
          <img
            src={cheap}
            alt="Cheaper Prices"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4">
            <span className="text-white font-medium">Cheaper Prices</span>
          </div>
        </div>

        <div className="relative h-56 rounded-lg overflow-hidden group">
          <img
            src={delivery}
            alt="Great Delivery Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4">
            <span className="text-white font-medium">Great Delivery Team</span>
          </div>
        </div>

        <div className="relative h-56 rounded-lg overflow-hidden group">
          <img
            src={skilledemployees}
            alt="Valued & Skilled Employees"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-4 left-4">
            <span className="text-white font-medium">
              Valued & Skilled Employees
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
