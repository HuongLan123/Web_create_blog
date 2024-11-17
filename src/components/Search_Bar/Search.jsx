import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import "C:/Program Files/Sublime Text/Web_blog/frontend/src/components/Pages/Home/navbar.css";

const Search = ({ value = "", onChange, handleSearch, onClearSearch }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="shapeSearch">
      <input
        type="text"
        placeholder="Search Notes"
        className="Notes"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        aria-label="Search notes input"
      />
      {value && (
        <IoMdClose
          className="Note1"
          onClick={onClearSearch}
          aria-label="Clear search"
          role="button"
        />
      )}
      <FaMagnifyingGlass
        className="Note2"
        onClick={handleSearch}
        aria-label="Search"
        role="button"
      />
    </div>
  );
};

export default Search;
