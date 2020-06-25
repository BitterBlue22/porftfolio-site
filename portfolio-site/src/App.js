import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

import PersistentDrawerLeft from "./components/re-useable/Navigation";

function App() {
  return (
    <>
      <CssBaseline />
      <PersistentDrawerLeft />
    </>
  );
}

export default App;
