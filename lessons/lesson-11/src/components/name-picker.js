import React from "react";

import { NamesList } from "./names-list";

export function NamePicker({ names, searchValue, shortList, setShortList }) {
  const filteredNames = names
    .filter(entry =>
      entry.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter(entry => !shortList.includes(entry.id));
  function addToShortList(id) {
    setShortList([...shortList, id]);
  }

  return <NamesList namesList={filteredNames} onItemClick={addToShortList} />;
}
