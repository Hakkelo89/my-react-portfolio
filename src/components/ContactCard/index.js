import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Pamela Dubb"
          height="140"
          image="https://avatars.githubusercontent.com/u/77554657?s=400&u=8ac85319e21ea84fc41319f799598db5b8d37e43&v=4"
          title="Pamela Dubb"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pamela Dubb
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Currently working as a Scheme Project Manager at Network Rail's
            Safety Taskforce team, with the intention to progress further.
            Student at University of Birmingham studying a full-stack web
            development coding bootcamp, graduating in Sept 2021. Very committed
            young individual who sets high standards in terms of work and
            personal qualities. Relish the thought of continuous development
            within a job role and have a strong desire for making quality
            contributions, allowing herself to become a key player within any
            organisation. Clear communicator, which is highlighted in her
            ability to work well in a team. Fosters the confidence to work
            individually, allowing herself to build on her interpersonal skills
            whilst eager to develop these skills further.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="https://www.linkedin.com/in/pamela-bhopal/">
          <Button size="small" color="primary">
            LinkedIn
          </Button>
        </Link>
        <Link href="https://github.com/PDUBB3">
          <Button size="small" color="primary">
            Github
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
