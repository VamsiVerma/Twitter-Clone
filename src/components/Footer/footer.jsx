import React, { useState } from "react";
import "./footer.css";
import { SearchBar } from "../searchBar/SearchBar";
import { SearchResultsList } from "../SearchResults/SearchResultsList";

function Footer() {
  // const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };

  return (
    <div className="d-flex flex-column">
      <div id="searchBar" className="search-bar">
        <div className="search-bar-container d-flex flex-column">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div>
        <div id="premium-section" className="bg-light m-2 premium-notification">
          premium notification
        </div>
      </div>
    </div>
  );
}

export default Footer;

// <div id="premium-section" className="bg-light m-2">
//       //   premium notification
//       // </div>
// <div id="footer" className="bg-light m-2">
//   footer section
// </div>
