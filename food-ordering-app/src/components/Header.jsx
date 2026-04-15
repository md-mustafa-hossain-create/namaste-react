import { ShoppingBasket, ShoppingBag } from "lucide-react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Log in");

  function handleClick() {
    btnName === "Log in" ? setBtnName("Log out") : setBtnName("Log in");
  }

  // Dynamic Class for Active Links
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-swiggy-orange transition-colors duration-300"
      : "text-swiggy-text-main hover:text-swiggy-orange transition-colors duration-300";

  return (
    <div className="flex justify-between items-center px-4 sm:px-8 xl:px-16 shadow-lg bg-white fixed w-full top-0 h-20 md:h-24 overflow-hidden z-50 transition-all font-sans">
      <div className="flex items-center gap-2">
        <img
          className="w-10 sm:w-12 md:w-14 drop-shadow-sm"
          src={LOGO_URL}
          alt="Namaste Food Logo"
        />
        <p className="hidden sm:block text-2xl font-black text-swiggy-dark tracking-tighter">
          Namaste<span className="text-swiggy-orange"> Food</span>
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <ul className="hidden lg:flex gap-4 xl:gap-8 items-center text-lg font-bold">
          <li className="cursor-pointer">
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/about" className={getNavLinkClass}>
              About
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/contact" className={getNavLinkClass}>
              Contact
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink 
              to="/grocery" 
              className={({ isActive }) => 
                isActive ? "text-swiggy-green flex items-center gap-1" : "text-swiggy-text-main hover:text-swiggy-green flex items-center gap-1"
              }
            >
              Grocery
              <ShoppingBag className="w-5 h-5" />
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/cart" className={getNavLinkClass}>
              <div className="flex gap-2 items-center">
                Cart
                <ShoppingBasket className="w-6 h-6" />
              </div>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Cart Icon */}
        <div className="flex lg:hidden text-swiggy-text-main hover:text-swiggy-orange cursor-pointer font-semibold gap-1 items-center">
          <ShoppingBasket className="w-6 h-6" />
        </div>

        <button
          className={`${
            btnName === "Log in"
              ? "bg-swiggy-dark hover:bg-gray-800"
              : "bg-swiggy-orange hover:bg-orange-600 shadow-lg shadow-orange-500/20"
          } py-2 md:py-3 xl:py-3.5 w-24 md:w-32 xl:w-40 rounded-xl text-white font-bold cursor-pointer text-sm md:text-base transition-all active:scale-95`}
          onClick={handleClick}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
