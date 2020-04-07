import React from "react";

import { names } from "../data";

import { NamesList } from "./names-list";
import { useShortList } from "../context/short-list";
import { useSearch } from "../context/search";

export function NamePicker() {
  const { shortList, setShortList } = useShortList();
  const { searchValue } = useSearch();
  const filteredNames = names
    .filter(entry => entry.name.toLowerCase().includes(searchValue.toLowerCase()))
    .filter(entry => !shortList.includes(entry.id));
  function addToShortList(id) {
    setShortList([...shortList, id]);
  }

  return <NamesList names={filteredNames} onItemClick={addToShortList} />;
}
