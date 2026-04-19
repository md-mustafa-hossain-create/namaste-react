import VegIcon from "./icons/VegIcon";
import NonVegIcon from "./icons/NonVegIcon";

const MenuItem = ({ data }) => {
  const { name, imageId, defaultPrice, description, isVeg } =
    data?.card?.info || {};

  return (
    <div>
      <li className="flex justify-between items-center py-6 border-b border-gray-200">
        <div className="flex flex-col gap-1 w-2/3">
          <div className="mb-1">
            {isVeg === 1 || isVeg === true ? <VegIcon /> : <NonVegIcon />}
          </div>
          <h2 className="text-xl font-bold text-swiggy-text-main">{name}</h2>
          <h3 className="font-bold text-swiggy-text-main">
            ₹ {(defaultPrice || data?.card?.info?.price) / 100}
          </h3>
          <p className="text-sm text-swiggy-text-muted mt-3 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="relative flex flex-col items-center ml-4">
          <img
            className="w-56 h-32 object-cover rounded-2xl shadow-lg"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              imageId
            }
            alt={name}
          />
          <button className="absolute -bottom-6 bg-white text-swiggy-green font-black px-10 py-3 rounded-xl border border-gray-100 shadow-xl hover:bg-gray-50 active:scale-95 transition-all uppercase text-sm cursor-pointer whitespace-nowrap">
            ADD +
          </button>
        </div>
      </li>
    </div>
  );
};

export default MenuItem;
