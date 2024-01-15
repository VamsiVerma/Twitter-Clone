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
      <div id="searchBar" className="search-bar ">
        <div className="search-bar-container d-flex flex-column">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div>
      </div>
      <aside
        id="premium-section"
        className="bg-light d-flex overflow-hidden premium-notification footer-border"
      >
        <div className="sp-container d-flex flex-column">
          <div className="spheading">
            <span className="spData">Subscribe to Premium</span>
          </div>
          <div className="sp-content">
            <span className="spData">
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </span>
          </div>
          <div className="d-flex">
            <button className="btn-radius sub-btn">
              <span className="d-flex spData">Subscribe</span>
            </button>
          </div>
        </div>
      </aside>
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
