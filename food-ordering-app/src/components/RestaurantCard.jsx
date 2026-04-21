import { CircleStar } from "lucide-react";
import { CDN_URL } from "../utils/constants";

// shouldScale is disabled when this card is wrapped inside an HOC to prevent double-scaling
const RestaurantCard = ({ resData, shouldScale = true }) => {
  const { cloudinaryImageId, name, avgRating, sla, locality, cuisines } =
    resData.card.card.info;

  return (
    <div
      className={`w-full flex flex-col gap-2 transition-all duration-200 cursor-pointer ${
        shouldScale ? "hover:scale-95" : ""
      }`}
    >
      <div className="rounded-2xl overflow-hidden w-full">
        <img
          className="w-full h-48 sm:h-56 object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>

      <div className="px-1">
        <h3 className="text-lg font-bold text-swiggy-dark line-clamp-1">{name}</h3>
        <div className="flex items-center gap-1">
          <CircleStar fill="#60b246" color="white" size={18} />
          <p className="font-semibold text-lg text-swiggy-text-main">
            {avgRating} • {sla?.slaString}
          </p>
        </div>
        <div className="text-swiggy-text-muted font-medium">
          <p className="line-clamp-1">{cuisines.join(", ")}</p>
          <p>{locality}</p>
        </div>
      </div>
    </div>
  );
};

// HOC: Wraps any card component with a "Promoted" badge
// The HOC handles hover scaling so we disable it inside the wrapped component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative w-full transition-transform duration-200 hover:scale-95 cursor-pointer">
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-gray-900/90 backdrop-blur-md text-white px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-xl border border-white/20 inline-block">
            Promoted
          </span>
        </div>
        <RestaurantCard {...props} shouldScale={false} />
      </div>
    );
  };
};

export const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

export default RestaurantCard;
