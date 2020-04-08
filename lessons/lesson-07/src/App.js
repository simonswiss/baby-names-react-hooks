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

function App({ names }) {
  return (
    <Fragment>
      <Search />
      <NamePicker names={names} />
    </Fragment>
  );
}

export default App;
