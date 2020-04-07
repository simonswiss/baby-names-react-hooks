import React from "react";

import { names } from "../data";

export function NamesList({ searchValue, shortList, setShortList }) {
  const filteredNames = names.filter(entry =>
    entry.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  function addToShortList(id) {
    setShortList([...shortList, id]);
  }

  return (
    <ul>
      {filteredNames.map(entry => (
        <li className={entry.sex} key={entry.id} onClick={() => addToShortList(entry.id)}>
          <button>{entry.name}</button>
        </li>
      ))}
    </ul>
  );
}
