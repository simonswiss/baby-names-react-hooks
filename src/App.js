import React from "react";

import { Footer } from "./components/footer";
import { NamesList } from "./components/names-list";
import { Search } from "./components/search";
import { ShortList } from "./components/short-list";
import { useSearch } from "./context/search";
import { data } from "./data";

function App() {
  const { searchValue, setSearchValue } = useSearch();

  return (
    <div>
      <Search />
      <main>
        {searchValue && <button onClick={() => setSearchValue("")}>clear search</button>}
        <ShortList names={data} />
        <NamesList names={data} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
