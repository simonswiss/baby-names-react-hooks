import React from "react";

import { names } from "../data";

export function NamePicker() {
  return (
    <ul>
      {names.map(entry => (
        <li className={entry.sex} key={entry.id}>
          <button>{entry.name}</button>
        </li>
      ))}
    </ul>
  );
}
