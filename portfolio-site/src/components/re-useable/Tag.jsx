import React from "react";
import styled from "styled-components";

const StyledTag = styled.span`
  background-color: whitesmoke;
  color: black;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Tag = ({ children }) => {
  return <StyledTag>{children}</StyledTag>;
};

export default Tag;
