import React from "react";
import { FcSearch } from "react-icons/fc";
import styles from "../Styles/Search.css";

function Searchet({ value, setValue, setLoading, setEffect, effect }) {
  const handleClick = (e) => {
    e.preventDefault();
    setEffect(!effect);
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <div className="Search-Group">
          <input
            placeholder="Search for a user..."
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="Button-Search"type="submit">Search</button>
          <FcSearch onClick={handleClick} className="icon" />
        </div>
      </form>
    </>
  );
}

export { Searchet };
