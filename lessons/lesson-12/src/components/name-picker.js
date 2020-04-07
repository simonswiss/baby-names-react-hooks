import React from "react";

import { names } from "../data";

import { NamesList } from "./names-list";

export function NamePicker({ searchValue, shortList, setShortList }) {
  const filteredNames = names
    .filter(entry => entry.name.toLowerCase().includes(searchValue.toLowerCase()))
    .filter(entry => !shortList.includes(entry.id));
  function addToShortList(id) {
    setShortList([...shortList, id]);
  }

  return <NamesList names={filteredNames} onItemClick={addToShortList} />;
}
