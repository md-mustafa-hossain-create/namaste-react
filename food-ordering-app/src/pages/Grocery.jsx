import React from "react";
import GroceryHeader from "../components/Grocery/GroceryHeader";

const Grocery = () => {
  return (
    <div className="p-8 text-center">
      <GroceryHeader />
      <h1 className="text-4xl font-bold text-swiggy-green mb-4">
        Namaste Grocery Store 🛒
      </h1>
      <p className="text-lg text-swiggy-text-muted max-w-2xl mx-auto">
        Welcome to our grocery vertical! This component is a separate "mini-application" 
        that is lazy-loaded (chunked) to ensure our main food-ordering app stays lightning fast.
      </p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for Grocery Components */}
        <div className="p-6 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
             <span className="text-2xl">🥦</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Fresh Vegetables</h3>
          <p className="text-sm text-gray-500">Pick from our wide range of organic farm-fresh veggies.</p>
        </div>
        
        <div className="p-6 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
             <span className="text-2xl">🍎</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Seasonal Fruits</h3>
          <p className="text-sm text-gray-500">High quality fruits delivered straight from the orchards.</p>
        </div>

        <div className="p-6 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
             <span className="text-2xl">🥛</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Dairy & Eggs</h3>
          <p className="text-sm text-gray-500">Fresh milk, butter, and farm-raised eggs for your breakfast.</p>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
