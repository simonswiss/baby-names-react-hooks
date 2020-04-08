import React, { useContext } from "react";

import { NamesList } from "./names-list";
import { NamesContext } from "../providers/names";

export function NamePicker({ searchValue, shortList, setShortList }) {
  const names = useContext(NamesContext);
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
