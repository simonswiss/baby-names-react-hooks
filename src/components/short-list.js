import React from "react";

import { NamesList } from "./names-list";

export function ShortList({ names, shortList, setShortList }) {
  return (
    <div className="favourites">
      <h4>Click on a name to shortlist it...</h4>
      <Names names={names} shortList={shortList} setShortList={setShortList} />
    </div>
  );
}

// Implementation component
function Names({ names, shortList, setShortList }) {
  console.log({ shortList });
  if (shortList.length === 0) return null;
  return (
    <ul>
      {shortList.map(id => {
        const entry = names[id];
        return (
          <li
            key={entry.id}
            className={entry.sex}
            onClick={() => setShortList(shortList.filter(id => id !== entry.id))}
          >
            {entry.name}
          </li>
        );
      })}
    </ul>
  );
}
