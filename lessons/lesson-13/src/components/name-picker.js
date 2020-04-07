import React, { useContext } from "react";

import { names } from "../data";

import { NamesList } from "./names-list";
import { ShortListContext } from "../context/short-list";
import { SearchContext } from "../context/search";

export function NamePicker() {
  const { shortList, setShortList } = useContext(ShortListContext);
  const { searchValue } = useContext(SearchContext);
  const filteredNames = names
    .filter(entry => entry.name.toLowerCase().includes(searchValue.toLowerCase()))
    .filter(entry => !shortList.includes(entry.id));
  function addToShortList(id) {
    setShortList([...shortList, id]);
  }

  return <NamesList names={filteredNames} onItemClick={addToShortList} />;
}
