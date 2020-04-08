import React, { useEffect, useRef, useState } from "react";

export function Search({ searchValue, setSearchValue }) {
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
