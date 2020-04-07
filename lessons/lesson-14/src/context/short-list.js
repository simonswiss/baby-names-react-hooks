import React, { createContext, useContext, useState } from "react";

const ShortListContext = createContext();

export function ShortListProvider({ children }) {
  const [shortList, setShortList] = useState([]);
  return (
    <ShortListContext.Provider value={{ shortList, setShortList }}>
      {children}
    </ShortListContext.Provider>
  );
}

export function useShortList() {
  const context = useContext(ShortListContext);

  if (!context) {
    throw new Error("Looks like you forgot to add a <ShortListProvider> wrapper!");
  }

  return context;
}
