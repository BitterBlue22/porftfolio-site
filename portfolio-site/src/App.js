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
import ErrorDIsplayer from "./components/re-useable/ErrorDIsplayer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
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
            <ErrorDIsplayer default />
          </Router>
        </PerfectScrollbar>
      </Box>
    </>
  );
}

export default App;
