import React from "react";
import { connect } from "react-redux";

import { setCurrentWorkout } from "../../redux/user/user.actions";

import {
  selectNextWorkoutVariation,
  selectVariationExercises
} from "../../redux/workouts/workouts.selectors";
import { selectExerciseHistorySummary } from "../../redux/user/user.selectors";

import useStyles from "./workout-title.style";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const WorkoutTitle = ({
  currentWorkout,
  nextWorkoutVariation,
  nextVariationExercises,
  setCurrentWorkout
}) => {
  const classes = useStyles();
  const {
    name: workoutName,
    variation: currentVariation,
    description
  } = currentWorkout;

  const handleClickFinish = () => {
    const nextWorkout = {
      ...currentWorkout,
      variation: nextWorkoutVariation,
      exercises: nextVariationExercises
    };
    console.log(nextWorkout);
    setCurrentWorkout(nextWorkout);
  };

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
  const { name, phase, variation } = state.user.currentWorkout;
  return {
    currentWorkout: state.user.currentWorkout,
    nextWorkoutVariation: selectNextWorkoutVariation(
      name,
      phase,
      variation
    )(state),
    nextVariationExercises: selectVariationExercises(
      name,
      phase,
      variation,
      state
    )(state)
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentWorkout: nextWorkout => dispatch(setCurrentWorkout(nextWorkout))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutTitle);
