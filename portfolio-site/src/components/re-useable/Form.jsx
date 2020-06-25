import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        required
        id="outlined-required"
        label="Name"
        variant="outlined"
      />

      <TextField
        required
        id="outlined-email"
        label="Email"
        type="email"
        variant="outlined"
      />

      <TextField
        id="outlined-message"
        label="Message"
        type="text"
        helperText="How can I help?"
        variant="outlined"
      />
      <Button>Submit</Button>
    </form>
  );
}
