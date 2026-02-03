import React from "react";

const Contact = () => {
  return (
    <div className="py-16 px-4 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-black">
        Contact Our Sales Team
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        <div className="w-full md:w-1/2">
          <form className="space-y-2">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-black transition"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-black transition"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-black transition"
            />

            <button
              type="button"
              className="w-full bg-black text-white py-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition mt-4"
            >
              Submit and Our Sales team will get in touch with you soon
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/8e/22/b8/8e22b8751a7794bcf2574a0d02933efd.jpg"
              alt="Sales Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
