import React, { Fragment } from "react";

import { useShortList } from "../context/short-list";

export function ShortList({ names }) {
  const { shortList } = useShortList();
  const hasFavourites = shortList.length > 0;

  return (
    <div className="favourites">
      <h4>{hasFavourites ? "Your shortlist: " : "Click on a name to shortlist it..."}</h4>
      {hasFavourites && <ShortListNames names={names} shortList={shortList} />}
    </div>
  );
}

// Implementation component
// ------------------------------
function ShortListNames({ names }) {
  const { shortList, setShortList } = useShortList();

  return (
    <Fragment>
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
      <hr />
    </Fragment>
  );
}
