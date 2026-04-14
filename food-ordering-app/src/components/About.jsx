import React from "react";

const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center py-16 px-4 sm:px-8 bg-white">
      {/* Hero Section */}
      <div className="max-w-4xl text-center mb-16 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-black text-swiggy-dark mb-6">
          Our Mission: <span className="text-swiggy-orange text-outline-orange">Elevating Food Experience</span>
        </h1>
        <p className="text-lg md:text-xl text-swiggy-text-muted leading-relaxed">
          At Namaste Food, we believe that good food shouldn't just be tasty—it should be an experience. 
          Founded in 2024, we've grown from a small neighborhood startup to India's most loved 
          food discovery and delivery platform.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl mb-20">
        <div className="text-center p-6 bg-swiggy-bg rounded-3xl">
          <h2 className="text-3xl font-bold text-swiggy-orange mb-1">500+</h2>
          <p className="text-sm font-semibold text-swiggy-text-main uppercase">Restaurants</p>
        </div>
        <div className="text-center p-6 bg-swiggy-bg rounded-3xl">
          <h2 className="text-3xl font-bold text-swiggy-orange mb-1">10k+</h2>
          <p className="text-sm font-semibold text-swiggy-text-main uppercase">Happy Users</p>
        </div>
        <div className="text-center p-6 bg-swiggy-bg rounded-3xl">
          <h2 className="text-3xl font-bold text-swiggy-orange mb-1">15 min</h2>
          <p className="text-sm font-semibold text-swiggy-text-main uppercase">Avg Delivery</p>
        </div>
        <div className="text-center p-6 bg-swiggy-bg rounded-3xl">
          <h2 className="text-3xl font-bold text-swiggy-orange mb-1">4.8</h2>
          <p className="text-sm font-semibold text-swiggy-text-main uppercase">App Rating</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-5xl grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-swiggy-dark mb-4 italic">Our Journey</h2>
          <p className="text-swiggy-text-main mb-4 leading-relaxed">
            It all started with a simple problem: "Why is it so hard to find authentic, 
            local flavors delivered fresh?" We set out to bridge the gap between 
            incredible local chefs and food lovers like you.
          </p>
          <p className="text-swiggy-text-main leading-relaxed italic">
            "We don't just deliver food; we deliver happiness, one plate at a time." 
            — Founders, Namaste Food.
          </p>
        </div>
        <div className="order-1 md:order-2 bg-swiggy-orange/10 p-12 rounded-[40px] flex items-center justify-center">
             <div className="text-8xl">🍲</div>
        </div>
      </div>

      {/* Values Section */}
      <div className="w-full max-w-5xl">
         <h2 className="text-center text-3xl font-bold mb-10 text-swiggy-dark">What We Stand For</h2>
         <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all border-b-4 border-b-swiggy-orange cursor-pointer">
               <h3 className="text-xl font-bold mb-3">Quality First</h3>
               <p className="text-swiggy-text-muted text-sm">Every restaurant on our platform goes through a strict 30-point quality check.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all border-b-4 border-b-swiggy-orange cursor-pointer">
               <h3 className="text-xl font-bold mb-3">Customer Obsession</h3>
               <p className="text-swiggy-text-muted text-sm">Our support team is available 24/7 to ensure your cravings are never ignored.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all border-b-4 border-b-swiggy-orange cursor-pointer">
               <h3 className="text-xl font-bold mb-3">Speedy Delivery</h3>
               <p className="text-swiggy-text-muted text-sm">With our hyper-local delivery fleet, we ensure your food stays piping hot.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;
