import React from "react";
import { Box, styled, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const StyledButton = styled(Button)({});
const Home = () => {
  return (
    <section className="home">
      <h2>Welcome!</h2>
      <h3>
        Site currently under construction, but feel free to have a look around.
      </h3>
    </section>
  );
};

export default Home;
