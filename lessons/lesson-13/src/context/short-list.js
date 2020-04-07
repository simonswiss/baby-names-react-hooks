import React, { createContext, useState } from "react";

export const ShortListContext = createContext();

export function ShortListProvider({ children }) {
  const [shortList, setShortList] = useState([]);
  return (
    <ShortListContext.Provider value={{ shortList, setShortList }}>
      {children}
    </ShortListContext.Provider>
  );
}
