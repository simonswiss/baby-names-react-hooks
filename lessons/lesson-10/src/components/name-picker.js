import React from "react";

import { names } from "../data";

export function NamePicker({ searchValue, shortList, setShortList }) {
  const filteredNames = names.filter(entry =>
    entry.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  function addToShortList() {
    console.log("adding to shortlist");
  }

  return (
    <ul>
      {filteredNames.map(entry => (
        <li className={entry.sex} key={entry.id}>
          <button onClick={addToShortList}>{entry.name}</button>
        </li>
      ))}
    </ul>
  );
}
