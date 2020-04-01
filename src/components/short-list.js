import React, { Fragment } from "react";

export function ShortList({ names, shortList, setShortList }) {
  const hasFavourites = shortList.length > 0;
  return (
    <div className="favourites">
      <h4>{hasFavourites ? "Your shortlist: " : "Click on a name to shortlist it..."}</h4>
      {hasFavourites && (
        <ShortListNames names={names} shortList={shortList} setShortList={setShortList} />
      )}
    </div>
  );
}

// Implementation component
function ShortListNames({ names, shortList, setShortList }) {
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
