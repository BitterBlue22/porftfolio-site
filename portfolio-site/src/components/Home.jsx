import React from "react";
import ImgMediaCard from "./re-useable/Card";
import { Grid } from "@material-ui/core";

const Home = () => {
  const codingProjects = {
    image:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/code.jpg?raw=true",
    description: "See some of my coding projects",
    tools: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "React.js",
      "Material-UI",
      "SASS",
      "Styled Components",
      "PSQL",
      "Git/Github",
    ],
    title: "Coding Projects",
    link: "/projects",
  };
  const artProjects = {
    image:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/BOT.jpg?raw=true",
    description: "See some of my art projects",
    tools: ["Photoshop", "DazStudio", "Octane Render", "Iray"],
    title: "Art Projects",
    link: "/art",
  };

  return (
    <Grid container justify="space-around">
      <ImgMediaCard data={codingProjects} />

      <ImgMediaCard data={artProjects} />
    </Grid>
  );
};

export default Home;
