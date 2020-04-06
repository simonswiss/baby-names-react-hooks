import React, { Fragment, useState } from "react";

import { NamesList } from "./components/names-list";
import { Search } from "./components/search";

/*
<App>
  <Search />
  <ShortList />
  <NamesList />
  <Footer />
</App>
*/

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Fragment>
      <Search />
      <NamesList />
    </Fragment>
  );
}

export default App;
