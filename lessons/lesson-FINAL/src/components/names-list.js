import React from "react";

export function NamesList({ names, onItemClick }) {
  return (
    <ul>
      {names.map(({ id, name, sex }) => (
        <li className={sex} key={id}>
          <button onClick={() => onItemClick(id)}>{name}</button>
        </li>
      ))}
    </ul>
  );
}
