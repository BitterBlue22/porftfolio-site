import React from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

const StyledTextField = styled(TextField)({
  background: "white",

  borderRadius: "3px",

  boxShadow: "0 3px 5px 2px #49274A",
  color: "white",
  margin: "1ch",
  width: "100%",
  display: "flex",
});

const StyledButton = styled(Button)({
  background: "#94618E",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px #49274A",
  color: "white",
  height: 48,
  padding: "0 30px",
  margin: "10px",
  "&:hover": {
    background: "	#49274A",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #94618E",
  },
});

const StyledGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
});

export default function StyledComponents() {
  return (
    <StyledGrid container spacing={1}>
      <form autoComplete="off" name="contact" data-netlify="true">
        <StyledGrid container item>
          <StyledTextField
            required
            id="outlined-required"
            label="Name"
            variant="outlined"
            name="name"
            fullWidth
          />
        </StyledGrid>
        <StyledGrid container item>
          <StyledTextField
            required
            id="outlined-email"
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            fullWidth
          />
        </StyledGrid>
        <StyledGrid container item>
          <StyledTextField
            id="outlined-message"
            label="Message"
            type="text"
            variant="outlined"
            multiline
            name="message"
            rows={4}
            fullWidth
          />
        </StyledGrid>
        <StyledGrid container item xs={12} spacing={1}>
          <StyledButton variant="contained" color="primary" type="submit">
            Submit
          </StyledButton>
        </StyledGrid>
      </form>
    </StyledGrid>
  );
}
