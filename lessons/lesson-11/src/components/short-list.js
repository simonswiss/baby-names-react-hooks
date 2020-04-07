import React from "react";

import { names } from "../data";

import { NamesList } from "./names-list";

export function ShortList({ shortList, setShortList }) {
  const shortListedNames = shortList.map(id => names[id]);
  function removeFromShortList(id) {
    setShortList(shortList.filter(i => i !== id));
  }
  return (
    <div className="short-list">
      <NamesList names={shortListedNames} onItemClick={removeFromShortList} />
    </div>
  );
}
