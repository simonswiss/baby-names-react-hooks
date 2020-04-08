import React, { Fragment, useState } from "react";

import { Footer } from "./components/footer";
import { NamePicker } from "./components/name-picker";
import { ResetSearch } from "./components/reset-search";
import { Search } from "./components/search";
import { ShortList } from "./components/short-list";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [shortList, setShortList] = useState([]);
  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <NamesContainer
        shortList={shortList}
        setShortList={setShortList}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Footer />
    </Fragment>
  );
}

function NamesContainer({
  shortList,
  setShortList,
  searchValue,
  setSearchValue
}) {
  return (
    <main>
      <ShortList shortList={shortList} setShortList={setShortList} />
      <NamePicker
        searchValue={searchValue}
        shortList={shortList}
        setShortList={setShortList}
      />
      <ResetSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </main>
  );
}

export default App;
