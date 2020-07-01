import React from "react";
import { styled, Button } from "@material-ui/core";

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
