import React from "react";

import { NamesList } from "./names-list";

export function ShortList({ names, shortList, setShortList }) {
  const shortListedNames = shortList.map(id => names[id]);
  function removeFromShortList(id) {
    setShortList(shortList.filter(i => i !== id));
  }
  return (
    <div className="short-list">
      <NamesList
        namesList={shortListedNames}
        onItemClick={removeFromShortList}
      />
    </div>
  );
}
