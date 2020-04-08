import React, { createContext, useContext } from "react";

import { names } from "../data";

// Create a context
const NamesContext = createContext();

// Context provider
export function NamesProvider({ children }) {
  return (
    <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
  );
}

// Custom hook to consume the context
export function useNames() {
  const context = useContext(NamesContext);

  // What if there is no context provider?
  if (!context) {
    throw new Error(
      "You probably forgot the <NamesProvider> context provider!"
    );
  }
  return context;
}
