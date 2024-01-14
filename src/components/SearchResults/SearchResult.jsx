import React from "react";
import "./SearchResult.css";

export const SearchResult = ({ result, id }) => {
  return (
    <div className="search-result" key={id}>
      {result.name}
    </div>
  );
};
