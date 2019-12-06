import React from "react";
import { connect } from "react-redux";

import {
  selectNextWorkoutVariation,
  selectVariationExercises
} from "../../redux/workouts/workouts.selectors";

import useStyles from "./workout-title.style";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const WorkoutTitle = ({
  currentWorkout,
  nextVariationExercises,
  nextWorkoutVariation
}) => {
  console.log("nextVariationExercises", nextVariationExercises);
  console.log("nextWorkoutVariation", nextWorkoutVariation);
  const classes = useStyles();
  const {
    name: workoutName,
    variation: currentVariation,
    description
  } = currentWorkout;

  const handleClickFinish = async () => {};

  return (
    <Paper className={classes.root}>
      <div className={classes.workoutDesc}>
        <Typography variant="h6" component="h4">
          {workoutName}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
        <Typography color="textSecondary">
          Variant: {currentVariation}
        </Typography>
      </div>
      <div className={classes.buttons}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => handleClickFinish()}
        >
          Finish
        </Button>
      </div>
    </Paper>
  );
};

const mapStateToProps = state => {
  const { name, phase, variation } = state.users.currentWorkout;
  return {
    currentWorkout: state.users.currentWorkout,
    nextVariationExercises: selectNextWorkoutVariation(
      name,
      phase,
      variation
    )(state),
    nextWorkoutVariation: selectVariationExercises(
      name,
      phase,
      variation
    )(state)
  };
};

export default connect(mapStateToProps)(WorkoutTitle);
