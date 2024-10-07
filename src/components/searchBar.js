import React from "react";
import { useState } from "react";

function SearchBar({ setSearchValue }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      style={{
        position: "relative",
        marginTop: "4rem",
        width: "50%",
      }}
    >
      <input
        data-testid="search-input"
        placeholder="Search a city"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          height: "2.5rem",
          width: "100%",
          borderRadius: "0.8rem",
          padding: "0.1rem",
        }}
      />

      <div
        data-testid="search-button"
        onClick={() => {
          inputValue && setSearchValue(inputValue);
          // console.log(inputValue);
        }}
        style={{
          position: "absolute",
          top: "0.3rem",
          bottom: "0.3rem",
          right: "0",
          display: "flex",
          width: "6rem",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.5rem",
          backgroundColor: "rgb(91, 72, 218)",
          color: "white",
        }}
      >
        Search
      </div>
    </div>
  );
}

export default SearchBar;
