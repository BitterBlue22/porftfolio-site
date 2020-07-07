import React from "react";
import ImgMediaCard from "./re-useable/Card";
import { Grid } from "@material-ui/core";

const Home = () => {
  const codingProjects = {
    image:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/code.jpg?raw=true",
    description: "See some of my coding projects",
    title: "Coding Projects",
    link: "/projects",
  };
  const artProjects = {
    image:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/BOT.jpg?raw=true",
    description: "See some of my art projects",
    title: "Art Projects",
    link: "/art",
  };

  return (
    <Grid container justify="space-around" alignContent="center">
      <ImgMediaCard data={codingProjects} />
      <ImgMediaCard data={artProjects} />
    </Grid>
  );
};

export default Home;
