import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

// Context provider
export function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}

// Consumer hook
export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "You need to wrap your component in a <SearchProvider> to access the SearchContext."
    );
  }

  return context;
}
