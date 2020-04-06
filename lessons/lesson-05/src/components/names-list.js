import React from "react";

import { names } from "../data";

export function NamesList() {
  return (
    <ul>
      {names.map(entry => (
        <li className={entry.sex} key={entry.id}>
          {entry.name}
        </li>
      ))}
    </ul>
  );
}
