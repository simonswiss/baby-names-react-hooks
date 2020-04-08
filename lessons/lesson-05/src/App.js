import React from "react";

import { NamePicker } from "./components/name-picker";

/*
<App>
  <Search />
  <ShortList />
  <NamePicker />
  <Footer />
</App>
*/

function App({ names }) {
  return <NamePicker names={names} />;
}

export default App;
