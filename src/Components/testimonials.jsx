import React from "react";

import larrymeyers from "../assets/larrymeyers.png";
import michaelscott from "../assets/michaelscott.jpg";
import client1 from "../assets/client1.png";

const testimonials = [
  {
    text: "This place has been my Go to Place for Our Company Needs of paper and have always been supportive to us. Thanks for the Excellent Customer support from the Sales team every time. Paper from here is completely Excellent and of really good quality.",
    name: "Mr. Deckert",
    role: "Valued Client",
    image: client1,
  },
  {
    text: "I have Initially Cancelled the Dunder-mifflin Subscription, I restarted buying from them since they started website and it is super useful. They maintain good relations with Clients, They even offered me a big hamper of food mostly of chocolates, they are really good in taste.",
    name: "Larry Meyers",
    role: "Valued Client",
    image: larrymeyers,
  },
  {
    text: "Dunder Mifflin is a really good place.. especially because it has super good, people loving, funny and really funny managers like Michael Scott. The whole of Scranton branch is so good with really good team ( except toby, I hate him ). The team is performing well under the guidance of Legendary regional manager Michael Scott ! Long live Michael Scott !",
    name: "This is not Michael Scott",
    role: "Valued Client",
    image: michaelscott,
  },
];

const Testimonials = () => {
  return (
    <div className="py-4 px-4 md:px-12 max-w-6xl mx-auto bg-white">
      <h2 className="text-3xl font-bold mb-4 text-black">
        Words of Our Customers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between"
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-6 font-medium">
              {testimonial.text}
            </p>
            <div className="flex items-center mt-auto">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <h4 className="text-sm font-bold text-black">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
