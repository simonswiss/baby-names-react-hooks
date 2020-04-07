import React, { Fragment, useState } from "react";

import { NamePicker } from "./components/name-picker";
import { Search } from "./components/search";
import { ShortList } from "./components/short-list";

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
  const [shortList, setShortList] = useState([]);
  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <ShortList shortList={shortList} setShortList={setShortList} />
      <NamePicker searchValue={searchValue} shortList={shortList} setShortList={setShortList} />
    </Fragment>
  );
}

export default App;
