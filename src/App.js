import React from "react";

import { names } from "./data";

function App() {
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

export default App;
