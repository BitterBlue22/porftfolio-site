import React from "react";
import { Box, styled } from "@material-ui/core";

const StyledBox = styled(Box)({
  backgroundImage:
    "url('https://files.123freevectors.com/wp-content/original/131184-abstract-cool-purple-polygonal-triangle-background.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundAttachment: "sticky",
  height: "100%",
  width: "100%",
  position: "fixed",

  margin: "0px",
  padding: "0px",
});
const Home = () => {
  return (
    <section className="page">
      <StyledBox />
    </section>
  );
};

export default Home;
