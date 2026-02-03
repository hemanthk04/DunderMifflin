import React from "react";

import Navbar from "../Components/navbar";
import Hero from "../Components/hero";
import Products from "../Components/products";
import WhyChooseUs from "../Components/whychooseus";
import Testimonials from "../Components/testimonials";
import Contact from "../Components/contact";
import Footer from "../Components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
