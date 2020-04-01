import React, { useState } from "react";

import { Footer } from "./components/footer";
import { NamesList } from "./components/names-list";
import { Search } from "./components/search";
import { ShortList } from "./components/short-list";

import { data } from "./data";

// Filtered search
// Shortlist
// Names list
// Footer

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [shortList, setShortList] = useState([]);
  return (
    <div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <main>
        <ShortList shortList={shortList} setShortList={setShortList} names={data} />
        <NamesList
          names={data}
          searchValue={searchValue}
          shortList={shortList}
          setShortList={setShortList}
        />
        {searchValue && <button onClick={() => setSearchValue("")}>clear search</button>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
