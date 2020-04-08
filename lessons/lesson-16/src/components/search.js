import React, { useEffect, useRef } from "react";

import { useAppState } from "../providers/app-state";

export function Search() {
  const inputRef = useRef();
  const { searchValue, setSearchValue } = useAppState();

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
