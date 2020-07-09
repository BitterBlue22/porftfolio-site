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
  background: "#36454f",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px #36454f",
  color: "white",
  height: 48,
  padding: "0 30px",
  margin: "10px",
  transition: "all 150ms ease-in-out",
  "&:active": {
    background: "	#49274A",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px 	#0b0e10",
  },
  "&:hover": {
    background: "	#49274A",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px 	#0b0e10",
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
      <form id="contact-form" name="contact" method="post" data-netlify="true">
        <input type="hidden" name="contact_number" />
        <StyledGrid container item>
          <StyledTextField
            required
            id="outlined-required"
            label="Name"
            variant="outlined"
            name="user_name"
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
            name="user_email"
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
          <StyledButton
            variant="contained"
            color="primary"
            type="submit"
            value="send"
          >
            Submit
          </StyledButton>
        </StyledGrid>
      </form>
    </StyledGrid>
  );
}
