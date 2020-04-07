import React, { Fragment, useContext } from "react";

import { names } from "../data";

import { NamesList } from "./names-list";

import { ShortListContext } from "../context/short-list";

export function ShortList() {
  const { shortList, setShortList } = useContext(ShortListContext);
  const shortListedNames = shortList.map(id => names[id]);
  const hasFavourites = shortList.length > 0;
  function removeFromShortList(id) {
    setShortList(shortList.filter(i => i !== id));
  }
  return (
    <div className="short-list">
      <h4>{hasFavourites ? "Your shortlist: " : "Click on a name to shortlist it..."}</h4>
      {hasFavourites && (
        <Fragment>
          <NamesList names={shortListedNames} onItemClick={removeFromShortList} />
          <hr />
        </Fragment>
      )}
    </div>
  );
}
