import React, { useEffect, useRef } from "react";

import { useSearch } from "../context/search";

export function Search() {
  const { searchValue, setSearchValue } = useSearch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <header>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type to filter.."
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
      />
    </header>
  );
}
