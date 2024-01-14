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
      <section id="searchBar" className="search-bar">
        <div className="search-bar-container d-flex flex-column">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div>
      </section>
    </div>
  );
}

export default Footer;

//  <input
//    type="search"
//    class="search"
//    placeholder="Search"
//    onChange={handleChange}
//    value={searchInput}
//  />;

// <div id="premium-section" className="bg-light m-2">
//       //   premium notification
//       // </div>
// <div id="footer" className="bg-light m-2">
//   footer section
// </div>
