import React from "react";

export function NamesList({ namesList, onItemClick }) {
  return (
    <ul>
      {namesList.map(({ id, name, sex }) => (
        <li className={sex} key={id}>
          <button onClick={() => onItemClick(id)}>{name}</button>
        </li>
      ))}
    </ul>
  );
}
