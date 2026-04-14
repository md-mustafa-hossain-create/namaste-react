import { ShoppingBasket, ShoppingBag } from "lucide-react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Log in");

  function handleClick() {
    btnName === "Log in" ? setBtnName("Log out") : setBtnName("Log in");
  }

  return (
    <div className="flex justify-between items-center px-4 sm:px-8 xl:px-16 shadow-lg bg-white fixed w-full top-0 h-20 md:h-24 overflow-hidden z-10 transition-all">
      <div className="flex items-center gap-2">
        <img
          className="w-10 sm:w-12 md:w-14"
          src={LOGO_URL}
          alt="Namaste Food Logo"
        />
        <p className="hidden sm:block text-xl font-bold text-swiggy-dark">
          Namaste <span className="text-swiggy-orange">Food</span>
        </p>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <ul className="hidden lg:flex gap-4 xl:gap-6 text-swiggy-text-main text-lg font-semibold ">
          <li className="hover:text-swiggy-orange cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-swiggy-orange cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-swiggy-orange cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-swiggy-green cursor-pointer">
            <Link to="/grocery" className="flex items-center gap-1">
              Grocery
              <ShoppingBag className="w-5 h-5 text-swiggy-green" />
            </Link>
          </li>
          <li className=" hover:text-swiggy-orange cursor-pointer">
            <Link to="#" className="flex gap-2">
              Cart
              <ShoppingBasket />
            </Link>
          </li>
        </ul>
        <div className="flex lg:hidden text-swiggy-text-main hover:text-swiggy-orange cursor-pointer font-semibold gap-1 items-center">
          Cart <ShoppingBasket className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <button
          className={`${
            btnName === "Log in"
              ? "bg-swiggy-dark hover:bg-gray-800"
              : "bg-swiggy-orange hover:bg-orange-600"
          } py-2 md:py-3 xl:py-4 w-24 md:w-32 xl:w-40 rounded-xl text-white font-semibold cursor-pointer text-sm md:text-base transition-colors`}
          onClick={handleClick}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
