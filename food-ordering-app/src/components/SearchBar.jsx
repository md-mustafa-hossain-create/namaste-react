import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ listOfRestaurants, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  function handleClick(e) {
    e.preventDefault();
    const searchedList = listOfRestaurants.filter((res) =>
      res.card.card.info.name
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .includes(searchText.toLocaleLowerCase().replace(/[^a-zA-Z0-9 ]/g, "")),
    );
    setFilteredRestaurants(searchedList);
  }
  return (
    <form
      className="flex gap-3 w-full sm:w-auto justify-center sm:justify-start"
      onSubmit={handleClick}
    >
      <input
        className="border border-gray-400 w-full sm:w-96 p-3 px-6 rounded-full text-lg focus:outline-none focus:border-red-500 transition-colors"
        type="text"
        value={searchText}
        placeholder="Search your dish...."
        onChange={(e) => {
          const value = e.target.value;
          setSearchText(value);
          const searchedList = listOfRestaurants.filter((res) =>
            res.card.card.info.name
              .toLowerCase()
              .replace(/[^a-zA-Z0-9 ]/g, "")
              .includes(
                value.toLocaleLowerCase().replace(/[^a-zA-Z0-9 ]/g, ""),
              ),
          );
          setFilteredRestaurants(searchedList);
        }}
      />
      <button
        type="submit"
        className="bg-black text-white p-3 rounded-full hover:bg-red-600 transition-colors flex items-center justify-center cursor-pointer shrink-0"
      >
        <Search size={24} />
      </button>
    </form>
  );
};

export default SearchBar;
