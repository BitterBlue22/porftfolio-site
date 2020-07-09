import React from "react";
import { Link } from "@reach/router";
import Tag from "./Tag";
import {
  Box,
  CardMedia,
  CardContent,
  CardActionArea,
  makeStyles,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#263037",
  },
  media: {
    maxHeight: "40rem",
    minHeight: "30rem",
    maxWidth: "40rem",
    minWidth: "30rem",
  },
  title: { color: "whitesmoke", fontSize: "x-large", fontFamily: "Mansalva" },
  text: { color: "whitesmoke", fontFamily: "Architects Daughter" },
  box: {
    margin: "1px",
    marginTop: "1rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "35rem",
  },
}));

export default function ImgMediaCard({
  data: { image, title, description, link, tools },
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea to={link} component={Link}>
        <CardMedia
          component="img"
          alt={title}
          image={image}
          title={title}
          className={classes.media}
        />
        <CardContent className={classes.content}>
          <span className={classes.title}>{title}</span>
          <br />
          <span className={classes.text}>{description}</span>
          <Box className={classes.box}>
            {tools.map((tool) => {
              return <Tag>{tool}</Tag>;
            })}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
