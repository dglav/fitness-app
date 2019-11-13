import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import WorkoutCard from "../workout-card/workout-card.component";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "80px",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
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
  },
  workoutCard: {}
}));

const WorkoutRoutine = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <div className={classes.workoutDesc}>
          <Typography variant="h6" component="h4">
            HowToBeast
          </Typography>
          <Typography color="textSecondary">Variant 3</Typography>
          <Typography color="textSecondary">Workout B</Typography>
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
      <WorkoutCard className={classes.workoutCard}></WorkoutCard>
    </React.Fragment>
  );
};

export default WorkoutRoutine;
