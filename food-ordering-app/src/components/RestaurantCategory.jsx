import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MenuItem from "./MenuItem";

const RestaurantCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { title, itemCards } = data;

  return (
    <div className="border-b border-gray-200 max-w-[800px] mx-auto w-full">
      {/* Accordion Header */}
      <button
        className="w-full flex justify-between items-center py-5 px-2 cursor-pointer bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2 className="text-lg font-bold text-swiggy-dark">
          {title} ({itemCards?.length})
        </h2>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Accordion Body */}
      {isOpen && (
        <ul className="px-2 pb-4">
          {itemCards?.map((item) => (
            <MenuItem key={item?.card?.info?.id} data={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
