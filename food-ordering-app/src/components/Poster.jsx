import React from "react";
import { LOGO_URL } from "../utils/constants";

/**
 * Poster Component
 * A beginner-friendly marketing banner for the Homepage.
 * Uses simple Tailwind CSS classes for layout and styling.
 */
const Poster = () => {
  // Public image URL for the background (Food dishes)
  const FOOD_IMAGE = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000";

  return (
    <div className="w-full mt-8 px-4 md:px-16 mb-12">
      {/* 
        MAIN CONTAINER - COMPACT VERSION
        - shadow-lg: A very subtle shadow for minimal depth
      */}
      <div className="relative w-full bg-gray-900 rounded-[32px] overflow-hidden flex flex-col items-center justify-center text-center border border-gray-800 shadow-lg min-h-[300px] py-10 px-8">
        
        {/* BACKGROUND IMAGE - Dimmed */}
        <img 
          src={FOOD_IMAGE} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        />

        {/* CONTENT ENVELOPE - Low z-index so it doesn't overlap header */}
        <div className="relative z-[1] max-w-3xl flex flex-col items-center gap-6">
          
          {/* Logo & Brand Tag (Smaller) */}
          <div className="flex flex-col items-center gap-2">
            <img src={LOGO_URL} alt="Logo" className="w-12 h-12" />
            <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">Namaste Food</span>
          </div>
          
          {/* HEADLINE (Compact but Bold) */}
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Better Food. <br />
            <span className="text-orange-500">Faster Delivery.</span>
          </h2>

          {/* DESCRIPTION (More concise) */}
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl">
            Download our app for exclusive daily rewards.
          </p>

          {/* DOWNLOAD BUTTONS (Professional Mid-size) */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <button className="hover:scale-105 transition-all cursor-pointer active:scale-95">
              <img 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" 
                alt="Play Store" 
                className="h-12 md:h-14"
              />
            </button>
            <button className="hover:scale-105 transition-all cursor-pointer active:scale-95">
              <img 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" 
                alt="App Store" 
                className="h-12 md:h-14"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Poster;
