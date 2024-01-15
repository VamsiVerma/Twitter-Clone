import React, { useState } from "react";
import "./footer.css";
import { SearchBar } from "../searchBar/SearchBar";
import { LuMoreHorizontal } from "react-icons/lu";
import { SearchResultsList } from "../SearchResults/SearchResultsList";

function Footer() {
  const [results, setResults] = useState([]);

  const subBtnClick = () => {
    alert("Subscribe button clicked");
  };

  return (
    <div className="d-flex flex-column">
      <div id="searchBar" className="search-bar ">
        <div className="search-bar-container d-flex flex-column mb-16">
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div>
      </div>
      <div
        id="premium-section"
        className="bg-light d-flex overflow-hidden premium-notification footer-border w-full br-16 mb-16"
      >
        <div className="sp-container d-flex flex-column p-16">
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
            <button className="btn-radius sub-btn" onClick={subBtnClick}>
              <span className="d-flex spData">Subscribe</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-light d-flex overflow-hidden happening footer-border w-full br-16 mb-16">
        <div className="p-16">
          <div className="spheading">
            <span>What's happening</span>
          </div>
        </div>
      </div>
      <div className="bg-light d-flex overflow-hidden follow-section footer-border w-full br-16 mb-16">
        <div className="p-16">
          <div className="spheading">
            <span>Who to follow</span>
          </div>
        </div>
      </div>
      <div className="bg-light d-flex overflow-hidden footer-content footer-border w-full br-16 mb-16">
        <nav className="px-3">
          <a className="links" href="https://twitter.com/en/tos">
            Terms of Service
          </a>
          <a className="links" href="https://twitter.com/en/privacy">
            Privacy Policy
          </a>
          <a
            className="links"
            href="https://help.twitter.com/en/rules-and-policies/x-cookies"
          >
            Cookie Policy
          </a>
          <a
            className="links"
            href="https://help.twitter.com/en/resources/accessibility"
          >
            Accessibility
          </a>
          <a
            className="links"
            href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo"
          >
            Ads info
          </a>
          <a className="links" href="#">
            More
            <LuMoreHorizontal />
          </a>
          <span>@2024 X Corp</span>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
