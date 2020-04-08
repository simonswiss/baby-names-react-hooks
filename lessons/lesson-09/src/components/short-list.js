import React from "react";

export function ShortList({ shortList, setShortList }) {
  return <pre>{JSON.stringify(shortList)}</pre>;
}
