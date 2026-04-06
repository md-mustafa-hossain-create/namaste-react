import { CircleStar } from "lucide-react";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, sla, locality, cuisines } =
    resData.card.card.info;
  return (
    <div className="w-full flex flex-col gap-2 hover:scale-95 transition-all duration-200 cursor-pointer">
      <div className="rounded-2xl overflow-hidden w-full">
        <img
          className="w-full h-48 sm:h-56 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>

      <div className="px-1">
        <h3 className="text-lg font-bold text-swiggy-dark">{name}</h3>
        <div className="flex items-center gap-1">
          <CircleStar fill="#60b246" color="white" size={18} />
          <p className="font-semibold text-lg text-swiggy-text-main">
            {avgRating} • {sla?.slaString}
          </p>
        </div>
        <div>
          <div className="text-swiggy-text-muted font-medium">
            <p>{cuisines.join(", ")}</p>
          </div>
          <p className="text-swiggy-text-muted font-medium">{locality}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
