import React, { Fragment } from "react";

import { NamePicker } from "./components/name-picker";
import { Search } from "./components/search";

/*
<App>
  <Search />
  <ShortList />
  <NamePicker />
  <Footer />
</App>
*/

function App() {
  return (
    <Fragment>
      <Search />
      <NamePicker />
    </Fragment>
  );
}

export default App;
