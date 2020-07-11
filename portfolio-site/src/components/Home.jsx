import React from "react";
import Typical from "react-typical";

const Home = () => {
  return (
    <article className="typical">
      <Typical
        steps={["Hello!", 1000, "Welcome to my site."]}
        loop={1}
        className="top-text"
      />

      <Typical steps={[500, "｡^‿^｡"]} loop={1} className="bottom-text" />

      <Typical
        steps={[
          2700,
          "Feel free to have a look around.",
          2000,
          "Projects will be updated as I finish them!",
          500,
        ]}
        loop={Infinity}
        wrapper="p"
        className="bottom-text"
      />
    </article>
  );
};

export default Home;
