import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import WorkoutTitle from "../workout-title/workout-title.component";
import WorkoutCard from "../workout-card/workout-card.component";

const useStyles = makeStyles(theme => ({
  container: {
    flex: "1 0 auto"
  }
}));

const WorkoutRoutine = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <WorkoutTitle></WorkoutTitle>
      <WorkoutCard></WorkoutCard>
    </div>
  );
};

export default WorkoutRoutine;