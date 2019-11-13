import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "80px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2)
  },
  workoutDesc: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between"
  },
  editButton: {
    marginRight: theme.spacing(1)
  }
}));

const WorkoutTitle = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.workoutDesc}>
        <Typography variant="h6" component="h4">
          HowToBeast
        </Typography>
        <Typography color="textSecondary">Workout B</Typography>
        <Typography color="textSecondary">Variant 3</Typography>
      </div>
      <div className={classes.buttons}>
        <Button
          variant="outlined"
          disabled
          className={classes.editButton}
          size="small"
        >
          Edit
        </Button>
        <Button variant="outlined" color="primary" size="small">
          Finish
        </Button>
      </div>
    </Paper>
  );
};

export default WorkoutTitle;
