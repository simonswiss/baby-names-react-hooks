import React, { useRef, useState } from "react";

export function Search() {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();

  console.log({ inputRef });
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
