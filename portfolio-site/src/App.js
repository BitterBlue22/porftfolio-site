import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import NavBar from "./components/re-useable/NavBar";
import { Router } from "@reach/router";
import PerfectScrollbar from "react-perfect-scrollbar";
import Projects from "./components/Projects";
import Art from "./components/Art";
import Home from "./components/Home";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "radial-gradient(#101518, #0b0e10)",
    minHeight: "100%",
    height: "100%",
    minWidth: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Box p={3} className={classes.root}>
        <PerfectScrollbar>
          <Router>
            <Home path="/" />
            <Projects path="/projects" />
            <Art path="/art" />
          </Router>
        </PerfectScrollbar>{" "}
      </Box>
    </>
  );
}

export default App;
