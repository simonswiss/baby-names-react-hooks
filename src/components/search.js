import React from "react";

export function Search({ searchValue, setSearchValue }) {
  return (
    <header>
      <form>
        <input
          type="text"
          placeholder="Type to filter.."
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
        />
      </form>
    </header>
  );
}
