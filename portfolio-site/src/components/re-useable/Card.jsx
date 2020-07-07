import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50%",
    backgroundColor: "#313e47",
  },
  media: {
    maxHeight: "40rem",
    maxWidth: "100%",
  },
  content: { backgroundColor: "#263037" },
  button: { backgroundColor: "#313e47" },
  expand: {
    transform: "rotate(0deg)",
    maxWidth: "50%",
    marginLeft: "auto",
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

export default function ImgMediaCard({
  data: { image, title, description, link },
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      className={classes.root}
      // className={clsx(classes.expand, {
      //   [classes.expandOpen]: expanded,
      // })}
      // onClick={handleExpandClick}
      // aria-expanded={expanded}
    >
      <Link to={link} className="link">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            image={image}
            title={title}
            className={classes.media}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
