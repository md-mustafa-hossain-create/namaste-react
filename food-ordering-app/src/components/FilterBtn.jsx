const FilterBtn = ({ listOfRestaurants, setListOfRestaurants }) => {
  const handleClick = () => {
    const topRestaurants = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.5,
    );
    setListOfRestaurants(topRestaurants);
  };
  return (
    <button
      className="bg-gray-100 text-black border border-gray-300 px-8 py-1.5 rounded-full font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto cursor-pointer"
      onClick={handleClick}
    >
      Top Rated Restaurant
    </button>
  );
};

export default FilterBtn;
