import { Box, styled } from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import ArtCards from "./re-useable/ArtCards";
import React, { Component } from "react";

class Art extends Component {
  // const links = {
  //   uninvited:
  //     "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Uninvited.jpg?raw=true",
  //   stampede:
  //     "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/stampede.jpg?raw=true",
  //   fantasy:
  //     "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Softened.jpg?raw=true",
  //   sorcery:
  //     "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Sorcery.jpg?raw=true",
  //   fire:
  //     "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Fire.jpg?raw=true",
  //   scifi:
  //     "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Scifi.jpg?raw=true",
  //   error:
  //     "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Error.jpg?raw=true",
  //   bowDress:
  //     "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Dress.jpg?raw=true",
  //   k:
  //     "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/K.jpg?raw=true",
  // };
  // const StyledBox = styled(Box)({
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexWrap: "wrap",

  //   "& @media (maxWidth : 500px)": {
  //     flexDirection: "column",
  //     backgroundColor: "pink",
  //   },
  // });
  render() {
    const images = [
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Uninvited.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/stampede.jpg?raw=true",
      },

      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Softened.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Sorcery.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Fire.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Scifi.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Error.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Dress.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/K.jpg?raw=true",
      },
    ];

    return (
      // <StyledBox>
      //   <ArtCards img={links.uninvited} />
      //   <ArtCards img={links.fantasy} />
      //   <ArtCards img={links.scifi} />
      //   <ArtCards img={links.bowDress} />
      //   <ArtCards img={links.sorcery} />
      //   <ArtCards img={links.k} />
      //   <ArtCards img={links.stampede} />
      //   <ArtCards img={links.error} />
      // </StyledBox>
      <ImageGallery items={images} />
    );
  }
}

export default Art;
