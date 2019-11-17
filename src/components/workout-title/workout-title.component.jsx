import React from "react";
import { connect } from "react-redux";

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
    alignItems: "left"
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  editButton: {
    marginBottom: theme.spacing(1)
  }
}));

const WorkoutTitle = ({ currentWorkout }) => {
  const classes = useStyles();

  const { name, variation, description } = currentWorkout;

  return (
    <Paper className={classes.root}>
      <div className={classes.workoutDesc}>
        <Typography variant="h6" component="h4">
          {name}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
        <Typography color="textSecondary">Variant: {variation}</Typography>
      </div>
      <div className={classes.buttons}>
        <Button variant="outlined" color="primary" size="small">
          Finish
        </Button>
      </div>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    currentWorkout: state.workout.currentWorkout
  };
};

export default connect(mapStateToProps)(WorkoutTitle);
