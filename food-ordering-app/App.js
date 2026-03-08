import React from "react";
import ReactDOM from "react-dom/client";
import {
  ShoppingBasket,
  CircleStar,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Search,
} from "lucide-react";

//=========Restaurant List Data======================================================================

const resList = [
  {
    info: {
      id: "1",
      name: "Meghna Foods",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&auto=format&fit=crop&q=60",
      rating: 4.5,
      time: "40-56 mins",
      cuisines: ["North Indian", "Biryani", "Awadhi"],
      location: "Chowringhee Mansions",
    },
  },
  {
    info: {
      id: "2",
      name: "Pizza Hut",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60",
      rating: 4.1,
      time: "30-45 mins",
      cuisines: ["Pizzas", "Italian"],
      location: "Park Street",
    },
  },
  {
    info: {
      id: "3",
      name: "Burger King",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60",
      rating: 4.2,
      time: "25-35 mins",
      cuisines: ["Burgers", "American"],
      location: "Salt Lake",
    },
  },
  {
    info: {
      id: "4",
      name: "Wow! Momo",
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&auto=format&fit=crop&q=60",
      rating: 3.9,
      time: "20-30 mins",
      cuisines: ["Tibetan", "Chinese", "Snacks"],
      location: "New Town",
    },
  },
  {
    info: {
      id: "5",
      name: "KFC",
      image:
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=60",
      rating: 4.0,
      time: "25-40 mins",
      cuisines: ["Fried Chicken", "Fast Food"],
      location: "Esplanade",
    },
  },
  {
    info: {
      id: "6",
      name: "Subway",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=60",
      rating: 4.3,
      time: "15-25 mins",
      cuisines: ["Healthy Food", "Salads", "Sandwiches"],
      location: "Sector 5",
    },
  },
  {
    info: {
      id: "7",
      name: "Taco Bell",
      image:
        "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&auto=format&fit=crop&q=60",
      rating: 4.0,
      time: "30-40 mins",
      cuisines: ["Mexican", "Tacos", "Burritos"],
      location: "South City Mall",
    },
  },
  {
    info: {
      id: "8",
      name: "Baskin Robbins",
      image:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=60",
      rating: 4.6,
      time: "15-20 mins",
      cuisines: ["Ice Cream", "Desserts"],
      location: "Gariahat",
    },
  },
  {
    info: {
      id: "9",
      name: "Starbucks",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=60",
      rating: 4.4,
      time: "20-30 mins",
      cuisines: ["Coffee", "Beverages", "Snacks"],
      location: "Camac Street",
    },
  },
  {
    info: {
      id: "10",
      name: "Domino's Pizza",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&auto=format&fit=crop&q=60",
      rating: 4.2,
      time: "30 mins",
      cuisines: ["Pizzas", "Italian", "Fast Food"],
      location: "Ballygunge",
    },
  },
  {
    info: {
      id: "11",
      name: "Barbeque Nation",
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&auto=format&fit=crop&q=60",
      rating: 4.7,
      time: "45-60 mins",
      cuisines: ["North Indian", "BBQ", "Kebabs"],
      location: "Park Street",
    },
  },
  {
    info: {
      id: "12",
      name: "Mainland China",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop&q=60",
      rating: 4.5,
      time: "40-50 mins",
      cuisines: ["Chinese", "Asian", "Seafood"],
      location: "Bypass",
    },
  },
  {
    info: {
      id: "13",
      name: "Haldiram's",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60",
      rating: 4.4,
      time: "25-35 mins",
      cuisines: ["Sweets", "North Indian", "Street Food"],
      location: "VIP Road",
    },
  },
  {
    info: {
      id: "14",
      name: "Peter Cat",
      image:
        "https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=600&auto=format&fit=crop&q=60",
      rating: 4.8,
      time: "50-60 mins",
      cuisines: ["Continental", "North Indian", "Iranian"],
      location: "Park Street",
    },
  },
  {
    info: {
      id: "15",
      name: "Kasturi",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop&q=60",
      rating: 4.3,
      time: "35-45 mins",
      cuisines: ["Bengali", "Seafood", "Indian"],
      location: "New Market",
    },
  },
  {
    info: {
      id: "16",
      name: "Arsalan",
      image:
        "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&auto=format&fit=crop&q=60",
      rating: 4.6,
      time: "40-55 mins",
      cuisines: ["Biryani", "Mughlai", "North Indian"],
      location: "Park Circus",
    },
  },
  {
    info: {
      id: "17",
      name: "Oh! Calcutta",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60",
      rating: 4.7,
      time: "45-55 mins",
      cuisines: ["Bengali", "Indian", "Desserts"],
      location: "Elgin Road",
    },
  },
  {
    info: {
      id: "18",
      name: "Aminia",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop&q=60",
      rating: 4.4,
      time: "35-50 mins",
      cuisines: ["Biryani", "Mughlai"],
      location: "Chinar Park",
    },
  },
  {
    info: {
      id: "19",
      name: "6 Ballygunge Place",
      image:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop&q=60",
      rating: 4.5,
      time: "40-50 mins",
      cuisines: ["Bengali", "Traditional"],
      location: "Ballygunge",
    },
  },
  {
    info: {
      id: "20",
      name: "Peshawri",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60",
      rating: 4.9,
      time: "60-70 mins",
      cuisines: ["North Indian", "Mughlai"],
      location: "ITC Sonar",
    },
  },
];
//=======================================================================================================

const Header = () => {
  return (
    <div className="flex justify-between items-center px-16  shadow-lg bg-white fixed w-full h-24 overflow-hidden z-10">
      <div className="flex items-center">
        <img
          className="max-w-28"
          src="https://i.pinimg.com/736x/2a/e8/f9/2ae8f92b73794d3bfd61623e14107b23.jpg"
        />
        <p className="text-xl font-bold">
          Namaste <span className="text-red-600">Food</span>
        </p>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4 text-gray-800 text-lg font-semibold ">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">About</li>
          <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
          <li className="flex gap-2 hover:text-red-600 cursor-pointer">
            Cart
            <ShoppingBasket />
          </li>
        </ul>
        <button className="bg-black py-4 px-10 rounded-xl text-white font-semibold cursor-pointer ">
          Sign In
        </button>
      </div>
    </div>
  );
};
const RestaurantCard = ({ resData }) => {
  return (
    <div className="w-fit flex flex-col gap-2 hover:scale-95 transition-all duration-200 cursor-pointer">
      <div className="rounded-2xl overflow-hidden w-fit">
        <img className="w-xs h-48 object-cover" src={resData.info.image} />
      </div>

      <div>
        <h3 className="text-lg font-bold">{resData.info.resName}</h3>
        <div className="flex items-center gap-1">
          <CircleStar fill="green" color="white" />
          <p className="font-semibold text-lg">
            {resData.info.rating} • {resData.info.time}
          </p>
        </div>
        <div>
          <p className="text-gray-600 font-medium">{resData.info.cuisines}</p>
          <p className="text-gray-600 font-medium">{resData.info.location}</p>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="px-16 pt-24 flex flex-col gap-7">
      <div className="mt-10 flex items-center  gap-2">
        <input
          className="border border-gray-400 w-96 p-3 px-6 rounded-full text-lg focus:outline-none focus:border-red-500 transition-colors"
          type="text"
          placeholder="Search your dish...."
        />

        <button className="bg-black text-white p-3 rounded-full hover:bg-red-600 transition-colors flex items-center justify-center cursor-pointer">
          <Search size={24} />
        </button>
      </div>
      <div className="flex flex-wrap gap-7 justify-between ">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

const Poster = () => {
  return (
    <div className="w-full mt-12 ">
      <img
        className="w-full object-cover "
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
      />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="px-16 py-12 bg-gray-50 text-gray-700 ">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 mb-10">
        {/* Brand Section */}
        <div className="w-full lg:w-1/5 flex flex-col gap-4">
          <div className="flex items-center">
            <img
              className="max-w-28"
              src="https://i.pinimg.com/736x/2a/e8/f9/2ae8f92b73794d3bfd61623e14107b23.jpg"
              alt="Namaste Food Logo"
            />
            <p className="text-xl font-bold ml-2">
              Namaste <span className="text-red-600">Food</span>
            </p>
          </div>
          <p className="text-gray-500 font-medium">
            © 2025 Namaste Food Limited
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-lg text-black mb-1">Company</h4>
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
            <h4 className="font-bold text-lg text-black mb-1">Contact us</h4>
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
            <h4 className="font-bold text-lg text-black mb-1">Legal</h4>
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
          <h4 className="font-bold text-lg text-black mb-1">Available in:</h4>
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
            <h4 className="font-bold text-lg text-black mb-1">
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
            <h4 className="font-bold text-lg text-black mb-1">Social Links</h4>
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Poster />
      <Footer />
    </div>
  );
};

// Rendering the App to the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
