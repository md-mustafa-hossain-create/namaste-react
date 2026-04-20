import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Poster = () => {
  const FOOD_IMAGE =
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000";

  return (
    <div className="w-full mt-8 px-4 md:px-16 mb-12">
      <div className="relative w-full bg-gray-900 rounded-[32px] overflow-hidden flex flex-col items-center justify-center text-center border border-gray-800 shadow-lg min-h-[300px] py-10 px-8">
        {/* Dimmed background food image */}
        <img
          src={FOOD_IMAGE}
          alt="Delicious food background"
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        />

        <div className="relative z-1 max-w-3xl flex flex-col items-center gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center gap-2">
            <img src={LOGO_URL} alt="Namaste Food Logo" className="w-12 h-12" />
            <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">
              Namaste Food
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Better Food. <br />
            <span className="text-orange-500">Right Here.</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-xl">
            Discover top-rated restaurants near you and order your favourite
            meals — all from your browser.
          </p>

          {/* Catchy Tagline */}
          <div className="mt-4 py-2 px-6 border-y border-white/10">
            <p className="text-orange-500 font-bold italic tracking-wide text-lg md:text-xl">
              "From street food hits to high-end treats — satisfy every craving, right here."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
