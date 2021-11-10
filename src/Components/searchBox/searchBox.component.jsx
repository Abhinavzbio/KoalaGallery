import React from "react";
import "./searchBox.style.css";

export const Searchbox = ({ placeholder, handleChange }) => (
  <div className="searchContainer">
    <input
      className="search"
      type="Search"
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  </div>
);
