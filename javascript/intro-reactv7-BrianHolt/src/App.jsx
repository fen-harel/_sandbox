import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ThemeContext from "./ThemeContext";
import SearchParams from "./searchParams";
import Details from "./Details";

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>{" "}
          {/* <a> -- when linking to third party */}
        </header>
        <Routes>
          {" "}
          {/* switch component: Only 1 of child comps will be executed at a time */}
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
