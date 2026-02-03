import React from "react";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
        {/* Left Side */}
        <div className="mb-8 md:mb-0">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold tracking-tighter uppercase leading-none">
              Dunder
            </h2>
            <h2 className="text-3xl font-bold tracking-tighter uppercase leading-none">
              Mifflin
            </h2>
          </div>
          <p className="text-sm text-gray-400">
            The people person's paper people.
          </p>
        </div>

        {/* Center */}
        <div className="text-center w-full md:w-auto mb-4 md:mb-0">
          <p className="text-gray-500 text-xs">
            Developed By Ryan, the Corporate Guy ( Previously Intern )
          </p>
          <p className="text-gray-500 text-xs">
            Just Kidding, Actually Developed by{" "}
            <a
              href="https://www.github.com/hemanthk04"
              className="underline underline-offset-2"
            >
              Hemanth Kapalavai
            </a>
          </p>
        </div>

        {/* Right Side */}
        <div className="text-right">
          {/* Phone */}
          <div className="flex items-center justify-end text-gray-400 text-sm">
            <Phone className="h-4 w-4 mr-2" />
            <span>(570) 555-0123</span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-end mt-1 text-gray-400 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>Scranton Business Park</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
