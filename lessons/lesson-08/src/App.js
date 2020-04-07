import React, { Fragment, useState } from "react";

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
  const [searchValue, setSearchValue] = useState("");
  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <NamePicker searchValue={searchValue} />
    </Fragment>
  );
}

export default App;
