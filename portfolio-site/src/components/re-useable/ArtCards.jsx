import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50%",
    backgroundColor: "#313e47",
  },
  media: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  content: { backgroundColor: "#263037" },
  button: { backgroundColor: "#313e47" },
  title: { color: "whitesmoke", fontSize: "x-large" },
  text: { color: "whitesmoke" },
  expand: {
    maxWidth: "50%",
    backgroundColor: "#313e47",
    margin: "1%",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transition: "all .3s ease-in",
    opacity: 1,
    transform: "scale(1.15)",
  },
}));

export default function ImgMediaCardArt({ img }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      className={classes.root}
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpandClick}
      aria-expanded={expanded}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="img"
          image={img}
          className={classes.media}
        />
      </CardActionArea>
    </Card>
  );
}
