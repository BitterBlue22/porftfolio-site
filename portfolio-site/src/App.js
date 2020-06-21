import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import SearchAppBar from "./components/re-useable/NavBar";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Blog from "./components/Blog";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SearchAppBar />
      <Router>
        <Home path="/" />
        <AboutMe path="/about-me" />
        <Projects path="/projects" />
        <ContactMe path="/contact-me" />
        <Blog path="/blog" />
      </Router>
    </React.Fragment>
  );
}

export default App;
