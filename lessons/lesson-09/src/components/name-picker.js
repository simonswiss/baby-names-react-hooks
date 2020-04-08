import React from "react";

export function NamePicker({ names, searchValue, shortList, setShortList }) {
  const filteredNames = names.filter(entry =>
    entry.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  function addToShortList(id) {
    setShortList([...shortList, id]);
  }

  return (
    <ul>
      {filteredNames.map(entry => (
        <li className={entry.sex} key={entry.id}>
          <button onClick={() => addToShortList(entry.id)}>{entry.name}</button>
        </li>
      ))}
    </ul>
  );
}
