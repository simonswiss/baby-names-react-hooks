import React, { createContext, useState, useContext } from "react";

const ShortListContext = createContext();

// Context provider
export function ShortListProvider({ children }) {
  const [shortList, setShortList] = useState([]);
  return (
    <ShortListContext.Provider value={{ shortList, setShortList }}>
      {children}
    </ShortListContext.Provider>
  );
}

// Consumer hook
export function useShortList() {
  const context = useContext(ShortListContext);
  if (!context) {
    throw new Error(
      "You need to wrap your component in a <ShortListProvider> to access the ShortListContext."
    );
  }

  return context;
}
