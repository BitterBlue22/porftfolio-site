import React from "react";
import { Grid, styled } from "@material-ui/core";
import ImgMediaCardArt from "./re-useable/ArtCards";

const StyledGrid = styled(Grid)({
  maxHeight: "50%",
});

const Art = () => {
  const links = {
    uninvited:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Uninvited.jpg?raw=true",
    stampede:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/StampedeFinal.jpg?raw=true",
    fantasy:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/fantasy.jpg?raw=true",
    sorcery:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/sorcery.jpg?raw=true",
    fire:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/FallingApart.jpg?raw=true",
    scifi:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Scifi.jpg?raw=true",
    error:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/RandomError.jpg?raw=true",
    bowDress:
      "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/BowDress1.jpg?raw=true",
  };
  return (
    <section className="page">
      <h2>Art</h2>
      <Grid
        container
        justify="space-around"
        alignContent="center"
        direction="row"
      >
        <ImgMediaCardArt img={links.uninvited} />

        <ImgMediaCardArt img={links.fantasy} />

        <ImgMediaCardArt img={links.scifi} />

        <ImgMediaCardArt img={links.bowDress} />

        <ImgMediaCardArt img={links.sorcery} />

        <ImgMediaCardArt img={links.stampede} />
      </Grid>
    </section>
  );
};

export default Art;
