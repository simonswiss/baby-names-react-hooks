import React, { Fragment } from "react";

import { Footer } from "./components/footer";
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
  return (
    <Fragment>
      <Search />
      <main>
        <ShortList />
        <NamePicker />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
