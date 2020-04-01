import React from "react";

export function NamesList({ names, searchValue, shortList, setShortList }) {
  // We want to only show a list of names that...
  // 1. are not currently in the short list
  // 2. are matching the current search string
  const filteredNames = names
    .filter(entry => {
      return !shortList.includes(entry.id);
    })
    .filter(entry => {
      return entry.name.toLowerCase().includes(searchValue.toLowerCase());
      // If need to support IE, use `indexOf`
      // returns -1 if no match
      // return entry.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
    });

  return (
    <ul>
      {filteredNames.map(entry => {
        return (
          <li
            className={entry.sex}
            key={entry.id}
            onClick={() => setShortList([...shortList, entry.id])}
          >
            {entry.name}
          </li>
        );
      })}
    </ul>
  );
}
