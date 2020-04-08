import React from "react";

function App({ names }) {
  return <pre>{JSON.stringify(names, null, 2)}</pre>;
}

export default App;
