import React, { useContext, useEffect, useRef } from "react";

import { SearchContext } from "../context/search";

export function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  return (
    <header>
      <input
        type="text"
        placeholder="Type to filter..."
        value={searchValue}
        onChange={handleChange}
        ref={inputRef}
      />
    </header>
  );
}
