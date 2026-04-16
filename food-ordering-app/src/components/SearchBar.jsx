import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ listOfRestaurants, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  function performSearch(text) {
    const searchedList = listOfRestaurants.filter((res) =>
      res?.card?.card?.info?.name
        ?.toLowerCase()
        ?.replace(/[^a-zA-Z0-9 ]/g, "")
        ?.includes(text.toLocaleLowerCase().replace(/[^a-zA-Z0-9 ]/g, "")),
    );
    setFilteredRestaurants(searchedList);
  }

  function handleClick(e) {
    e.preventDefault();
    performSearch(searchText);
  }

  return (
    <form
      className="flex gap-3 w-full sm:w-auto justify-center sm:justify-start"
      onSubmit={handleClick}
    >
      <input
        className="border border-gray-300 w-full sm:w-96 p-3 px-6 rounded-full text-lg focus:outline-none focus:border-swiggy-orange transition-colors text-swiggy-text-main placeholder:text-swiggy-text-muted"
        type="text"
        value={searchText}
        placeholder="Search your dish...."
        onChange={(e) => {
          const value = e.target.value;
          setSearchText(value);
          performSearch(value);
        }}
      />
      <button
        type="submit"
        className="bg-swiggy-dark text-white p-3 rounded-full hover:bg-swiggy-orange transition-colors flex items-center justify-center cursor-pointer shrink-0"
      >
        <Search size={24} />
      </button>
    </form>
  );
};

export default SearchBar;
