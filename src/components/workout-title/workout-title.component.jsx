import React from "react";
import { connect } from "react-redux";

import useStyles from "./workout-title.style";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const WorkoutTitle = ({ onFinishWorkout, currentWorkout }) => {
  const classes = useStyles();
  const {
    name: workoutName,
    variation: currentVariation,
    description
  } = currentWorkout;

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
          onClick={() => onFinishWorkout()}
        >
          Finish
        </Button>
      </div>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    currentWorkout: state.user.currentWorkout
  };
};

export default connect(mapStateToProps)(WorkoutTitle);
