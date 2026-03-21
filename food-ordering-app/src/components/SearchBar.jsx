import { useState } from "react";
import { Search } from "lucide-react";
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="flex gap-3 w-full sm:w-auto justify-center sm:justify-start">
      <input
        className="border border-gray-400 w-full sm:w-96 p-3 px-6 rounded-full text-lg focus:outline-none focus:border-red-500 transition-colors"
        type="text"
        value={searchText}
        placeholder="Search your dish...."
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className="bg-black text-white p-3 rounded-full hover:bg-red-600 transition-colors flex items-center justify-center cursor-pointer shrink-0">
        <Search size={24} />
      </button>
    </div>
  );
};

export default SearchBar;
