import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchSearchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchSearchData(value);
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="input-wrapper">
      <IoSearch id="search-icon" />

      <input
        id="search-bar"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <span className="clear" onClick={handleClear}>
        <AiFillCloseCircle id="close-icon" />
      </span>
    </div>
  );
};
