import { ShoppingBasket, ShoppingBag, User } from "lucide-react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/slices/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-swiggy-orange transition-colors duration-300"
      : "text-swiggy-text-main hover:text-swiggy-orange transition-colors duration-300";

  //subscribing to the redux store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  const userAuth = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Very simple Logout function
  async function handleAuth() {
    try {
      setIsLoggingOut(true);
      // 1. Tell Firebase to log the user out
      await signOut(auth);
      // NOTE: We don't need to manually clear Redux here! 
      // The Watchman in App.jsx will automatically notice Firebase logged out, and clear Redux for us.
    } catch (error) {
      console.log("Logout Error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  }

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
                isActive
                  ? "text-swiggy-green flex items-center gap-1"
                  : "text-swiggy-text-main hover:text-swiggy-green flex items-center gap-1"
              }
            >
              Grocery
              <ShoppingBag className="w-5 h-5" />
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${getNavLinkClass({ isActive })} group`
              }
            >
              <div className="flex gap-2 items-center">
                Cart
                <div className="relative">
                  <ShoppingBasket className="w-7 h-7 transition-transform group-hover:scale-110" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-swiggy-orange text-white text-[11px] font-bold min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full shadow-md leading-none transition-all group-hover:scale-110">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              </div>
            </NavLink>
          </li>
        </ul>

        {/* Mobile-only cart icon */}
        <NavLink
          to="/cart"
          className="flex lg:hidden text-swiggy-text-main hover:text-swiggy-orange cursor-pointer font-semibold gap-1 items-center group"
        >
          <div className="relative">
            <ShoppingBasket className="w-7 h-7 transition-transform group-hover:scale-110" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-swiggy-orange text-white text-[11px] font-bold min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full shadow-md leading-none transition-all group-hover:scale-110">
                {cartItems.length}
              </span>
            )}
          </div>
        </NavLink>

        {userAuth.isAuthenticated ? (
          <button
            onClick={handleAuth}
            title="Click to log out"
            className="flex items-center gap-2 md:gap-3 bg-white shadow-sm hover:shadow-md hover:border-red-200 border border-gray-100 py-1.5 pl-1.5 pr-3 md:pr-4 rounded-full text-swiggy-dark hover:text-red-500 font-bold cursor-pointer transition-all group active:scale-95"
          >
            <div className="bg-swiggy-orange text-white p-2 rounded-full group-hover:bg-red-500 transition-colors shadow-sm">
              <User className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="text-sm md:text-base max-w-[80px] md:max-w-[120px] truncate">
              {isLoggingOut ? "Logging out..." : (userAuth.userInfo?.name || "User")}
            </span>
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-swiggy-dark hover:bg-gray-800 py-2 md:py-3 xl:py-3.5 w-24 md:w-32 xl:w-40 rounded-xl text-white font-bold cursor-pointer text-sm md:text-base transition-all active:scale-95 flex items-center justify-center gap-2">
              <User className="w-4 h-4" />
              Sign in
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
