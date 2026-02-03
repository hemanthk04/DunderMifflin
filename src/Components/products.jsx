import React from "react";
import officepaper from "../assets/officepap.png";
import industrialpaper from "../assets/industrialpaper.jpg";
import custompaper from "../assets/custompap.png";
import recycledpaper from "../assets/recycpaper.png";

const products = [
  {
    name: "Office Paper",
    image: officepaper,
  },
  {
    name: "Industrial Paper",
    image: industrialpaper,
  },
  {
    name: "Custom Needs",
    image: custompaper,
  },
  {
    name: "Recycled Paper",
    image: recycledpaper,
  },
];


const Products = () => {
  return (
    <div className="py-8 px-4 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-black">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-white font-medium text-sm md:text-base">
                {product.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
