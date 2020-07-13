import ImageGallery from "react-image-gallery";
import React, { Component } from "react";

class Art extends Component {
  render() {
    const images = [
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/1000/Uninvited1000.jpg?raw=true",
        thumbnail:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Uninvited.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/1000/fantasy1000.jpg?raw=true",
        thumbnail:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Softened.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/1000/sorcery1000.jpg?raw=true",
        thumbnail:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Sorcery.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/1000/Scifi1000.jpg?raw=true",
        thumbnail:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Scifi.jpg?raw=true",
      },

      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/1000/BowDress.jpg?raw=true",
        thumbnail:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Dress.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/1000/k1000.jpg?raw=true",
        thumbnail:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/K.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/1000/stampede1000.jpg?raw=true",
        thumbnail:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/stampede.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/1000/Error.jpg?raw=true",
        thumbnail:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Error.jpg?raw=true",
      },
      {
        original:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/1000/fire1000.jpg?raw=true",
        thumbnail:
          "https://github.com/BitterBlue22/portfolio-site/blob/master/portfolio-site/public/images/Fire.jpg?raw=true",
      },
    ];

    return <ImageGallery items={images} />;
  }
}

export default Art;
