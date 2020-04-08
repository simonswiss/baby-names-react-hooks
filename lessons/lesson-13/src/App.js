import React, { Fragment, useState } from "react";

import { Footer } from "./components/footer";
import { NamePicker } from "./components/name-picker";
import { ResetSearch } from "./components/reset-search";
import { Search } from "./components/search";
import { ShortList } from "./components/short-list";

function App({ names }) {
  const [searchValue, setSearchValue] = useState("");
  const [shortList, setShortList] = useState([]);
  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <main>
        <p>Hello</p>
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
        <ResetSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
