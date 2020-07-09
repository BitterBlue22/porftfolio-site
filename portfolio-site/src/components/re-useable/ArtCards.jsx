import React from "react";
import { Box, styled } from "@material-ui/core";

const StyledBox = styled(Box)({
  padding: "1%",
  backgroundColor: "#36454f",
  margin: "1%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const ArtCards = ({ img }) => {
  return (
    <StyledBox>
      <img src={img} alt={img} className="art-image" />
    </StyledBox>
  );
};

export default ArtCards;
