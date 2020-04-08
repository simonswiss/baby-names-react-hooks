import React, { Fragment } from "react";

import { NamesList } from "./names-list";
import { useNames } from "../providers/names";
import { useAppState } from "../providers/app-state";

export function ShortList() {
  const names = useNames();
  const { shortList, setShortList } = useAppState();

  const shortListedNames = shortList.map(id => names[id]);
  function removeFromShortList(id) {
    setShortList(shortList.filter(i => i !== id));
  }

  const hasNames = shortListedNames.length > 0;
  return (
    <div className="short-list">
      <h2>
        {hasNames ? "Your shortlist" : "Click on a name to shortlist it."}
      </h2>
      {hasNames && (
        <Fragment>
          <NamesList
            namesList={shortListedNames}
            onItemClick={removeFromShortList}
          />
          <hr />
        </Fragment>
      )}
    </div>
  );
}
