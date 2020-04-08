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

function App({ names }) {
  const [searchValue, setSearchValue] = useState("");
  const [shortList, setShortList] = useState([]);
  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <main>
        <ShortList
          names={names}
          shortList={shortList}
          setShortList={setShortList}
        />
        <NamePicker
          names={names}
          searchValue={searchValue}
          shortList={shortList}
          setShortList={setShortList}
        />
      </main>
    </Fragment>
  );
}

export default App;
