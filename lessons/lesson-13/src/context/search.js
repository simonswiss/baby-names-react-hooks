import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}
