import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(2),
    padding: 0
  },
  cardContent: {
    padding: theme.spacing(2)
  }
}));

const ExerciseCard = ({ name }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography component="h5" variant="h5">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
