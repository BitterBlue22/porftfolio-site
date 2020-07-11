import React from "react";
import {
  Tabs,
  Tab,
  makeStyles,
  AppBar,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "@reach/router";

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "radial-gradient(#101518, #0b0e10)",
    minHeight: "100%",
    minWidth: "100%",
  },
  appbar: {
    backgroundColor: "#161c20",
    overflow: "hidden",
    maxWidth: "100%",
  },

  contacttab: {
    backgroundColor: "#161c20",
    maxWidth: "10rem",
    "&:active": {
      background: "	#36454f",
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px 	#0b0e10",
    },
    "&:hover": {
      background: "	#36454f",
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px 	#0b0e10",
    },
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbar}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
        >
          <Tab label="Home" {...a11yProps(0)} to="/" component={Link} />

          <Tab
            label="Projects"
            href="/projects"
            {...a11yProps(1)}
            to="/projects"
            component={Link}
          />

          <Tab
            label="Art"
            href="/art"
            {...a11yProps(2)}
            to="/art"
            component={Link}
          />

          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
            className={classes.contacttab}
          >
            Contact Me
          </Button>
          <Menu
            id="contact-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <a href="https://github.com/BitterBlue22" className="link">
              <MenuItem onClick={handleClose}>
                <GitHubIcon className="github" />
                Github
              </MenuItem>
            </a>
            <a
              href="https://www.linkedin.com/in/telisa-du-plessis-7b1284150/"
              className="link"
            >
              <MenuItem onClick={handleClose}>
                <LinkedInIcon className="linkedin" />
                LinkedIn
              </MenuItem>
            </a>
          </Menu>
        </Tabs>
      </AppBar>
    </div>
  );
}
