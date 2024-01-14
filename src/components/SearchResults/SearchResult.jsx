import React from "react";
import "./SearchResult.css";

export const SearchResult = ({ result, id }) => {
  return (
    <div
      className="search-result"
      key={id}
      onClick={(e) => alert(`You have clicked on ${result.name}`)}
    >
      {result.name}
    </div>
  );
};
