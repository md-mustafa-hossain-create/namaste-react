import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 py-8 md:py-12 bg-swiggy-bg text-swiggy-text-main ">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-nowrap gap-8 lg:justify-between mb-10">
        {/* Brand Section */}
        <div className="col-span-2 md:col-span-4 lg:w-1/5 flex flex-col gap-4">
          <div className="flex items-center">
            <img
              className="w-10 sm:w-12 md:w-14"
              src={LOGO_URL}
              alt="Namaste Food Logo"
            />
            <p className="text-xl font-bold ml-2 text-swiggy-dark">
              Namaste <span className="text-swiggy-orange">Food</span>
            </p>
          </div>
          <p className="text-swiggy-text-muted font-medium">
            © {new Date().getFullYear()} Namaste Food Limited
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-lg text-swiggy-dark mb-1">Company</h4>
          <ul className="flex flex-col gap-2 font-medium">
            <li className="cursor-pointer hover:text-black">About Us</li>
            <li className="cursor-pointer hover:text-black">
              Swiggy Corporate
            </li>
            <li className="cursor-pointer hover:text-black">Careers</li>
            <li className="cursor-pointer hover:text-black">Team</li>
            <li className="cursor-pointer hover:text-black">Swiggy One</li>
            <li className="cursor-pointer hover:text-black">
              Swiggy Instamart
            </li>
            <li className="cursor-pointer hover:text-black">Swiggy Dineout</li>
            <li className="cursor-pointer hover:text-black">Minis</li>
            <li className="cursor-pointer hover:text-black">Pyng</li>
          </ul>
        </div>

        {/* Contact & Legal */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-lg text-swiggy-dark mb-1">Contact us</h4>
            <ul className="flex flex-col gap-2 font-medium">
              <li className="cursor-pointer hover:text-black">
                Help & Support
              </li>
              <li className="cursor-pointer hover:text-black">
                Partner with us
              </li>
              <li className="cursor-pointer hover:text-black">Ride with us</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-lg text-swiggy-dark mb-1">Legal</h4>
            <ul className="flex flex-col gap-2 font-medium">
              <li className="cursor-pointer hover:text-black">
                Terms & Conditions
              </li>
              <li className="cursor-pointer hover:text-black">Cookie Policy</li>
              <li className="cursor-pointer hover:text-black">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

        {/* Available In */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-lg text-swiggy-dark mb-1">Available in:</h4>
          <ul className="flex flex-col gap-2 font-medium">
            <li className="cursor-pointer hover:text-black capitalize">
              bangalore
            </li>
            <li className="cursor-pointer hover:text-black capitalize">
              gurgaon
            </li>
            <li className="cursor-pointer hover:text-black capitalize">
              hyderabad
            </li>
            <li className="cursor-pointer hover:text-black capitalize">
              delhi
            </li>
            <li className="cursor-pointer hover:text-black capitalize">
              mumbai
            </li>
            <li className="cursor-pointer hover:text-black capitalize">pune</li>
            <li className="cursor-pointer text-gray-500 mt-2">685 cities...</li>
          </ul>
        </div>

        {/* Life & Socials */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-lg text-swiggy-dark mb-1">
              Life at Swiggy
            </h4>
            <ul className="flex flex-col gap-2 font-medium">
              <li className="cursor-pointer hover:text-black">
                Explore with Swiggy
              </li>
              <li className="cursor-pointer hover:text-black">Swiggy News</li>
              <li className="cursor-pointer hover:text-black">Snackables</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-lg text-swiggy-dark mb-1">Social Links</h4>
            <ul className="flex gap-4 font-medium text-gray-800">
              <li className="cursor-pointer hover:text-black">
                <Linkedin size={24} />
              </li>
              <li className="cursor-pointer hover:text-black">
                <Instagram size={24} />
              </li>
              <li className="cursor-pointer hover:text-black">
                <Facebook size={24} />
              </li>
              <li className="cursor-pointer hover:text-black">
                <Twitter size={24} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
