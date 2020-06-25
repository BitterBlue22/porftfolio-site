import React from "react";
import SimpleExpansionPanel from "./re-useable/Accordion";

const Projects = () => {
  return (
    <section className="page">
      <h2>Coding projects</h2>
      <SimpleExpansionPanel />
      <h3>
        <a href="https://github.com/BitterBlue22">GITHUB</a>
      </h3>
    </section>
  );
};

export default Projects;
