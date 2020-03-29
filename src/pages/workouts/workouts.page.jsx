import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

import { firestore } from "../../firebase/firebase.utils";
import {
  updateUserInfo,
  setCurrentWorkoutStart,
  submitWorkoutStart
} from "../../redux/user/user.actions";

import {
  selectNextWorkoutVariation,
  selectVariationExercises
} from "../../redux/workouts/workouts.selectors";

import WorkoutTitle from "../../components/workout-title/workout-title.component";
import WorkoutCard from "../../components/workout-card/workout-card.component";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  buttonLeft: {
    marginRight: theme.spacing(1)
  }
}));

const WorkoutPage = ({
  currentWorkout,
  userId,
  nextWorkoutVariation,
  nextVariationExercises,
  updateUserInfo,
  submitWorkoutStart,
  setCurrentWorkoutStart
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  const [currentExercises, setCurrentExercises] = useState(() => {
    let exercises = currentWorkout.exercises;
    return Object.keys(exercises).map(exerciseName => {
      const setsAndReps = Object.keys(exercises[exerciseName])[0];
      const sets = parseInt(setsAndReps.slice(0, 1), 10);
      const currentReps = new Array(parseInt(sets, 10)).fill(0);

      let exercise = { [exerciseName]: exercises[exerciseName] };
      exercise[exerciseName][setsAndReps].currentReps = currentReps;

      return exercise;
    });
  });

  const handleUpdateExercise = exercise => {
    setCurrentExercises({
      ...currentExercises,
      exercise
    });
  };

  const initiateWorkoutFinish = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const userId = "98357273";
    const userRef = firestore.collection(`users`).doc(userId);
    const unsubscribeFromSnapshot = userRef.onSnapshot(snapshot => {
      updateUserInfo(snapshot.data());
    });
    return () => unsubscribeFromSnapshot();
  }, []);

  const handleFinishWorkout = () => {
    handleClose();
    // Get current workout data
    const workoutData = currentWorkout;

    for (const [exerciseName, repsAndSetsETC] of Object.entries(
      workoutData.exercises
    )) {
      const exerciseData = Object.values(repsAndSetsETC)[0];

      // Check for PR
      if (
        exerciseData.targetWeight !== "Body Weight" &&
        exerciseData.last.weight >= exerciseData.pr.weight
      ) {
        const setsAndReps = Object.keys(repsAndSetsETC)[0];
        const sets = parseInt(setsAndReps.slice(0, 1), 10);
        const reps = parseInt(setsAndReps.slice(2, 3), 10);
        const currentTotalReps = exerciseData.last.repCount.reduce(
          (accumulator, currentValue) => {
            return accumulator + currentValue;
          }
        );
        const toPR = sets * reps - currentTotalReps;
        if (toPR <= 0) {
          console.log(`Congradulations, you got a new PR for ${exerciseName}`);
        } else {
          console.log(
            `Unfortunately you did not PR ${exerciseName} this time.`
          );
        }
      } else {
        const currentTotalReps = exerciseData.last.repCount.reduce(
          (accumulator, currentValue) => {
            return accumulator + currentValue;
          }
        );
        const toPR = exerciseData.pr.totalReps - currentTotalReps;
        if (toPR <= 0) {
          console.log(`Congradulations, you got a new PR for ${exerciseName}`);
        } else {
          console.log(
            `Unfortunately you did not PR ${exerciseName} this time.`
          );
        }
      }
    }

    // Get next workout data
    const nextWorkout = {
      ...currentWorkout,
      variation: nextWorkoutVariation,
      exercises: nextVariationExercises
    };
    // Send workout data to Firebase
    submitWorkoutStart(userId, workoutData);
    // Set the next workout
    setCurrentWorkoutStart(userId, nextWorkout);
    // Reroute to home page
    history.push("/");
  };

  return (
    <div id="workout-page">
      <WorkoutTitle
        onFinishWorkout={() => initiateWorkoutFinish()}
      ></WorkoutTitle>
      {currentExercises.map(exercise => {
        const name = Object.keys(exercise)[0];
        return (
          <WorkoutCard
            key={name}
            exercise={exercise}
            handleUpdate={e => handleUpdateExercise(e)}
          ></WorkoutCard>
        );
      })}
      <Modal
        aria-labelledby="transition-modal-title"
        className={classes.modal}
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isModalOpen}>
          <div className={classes.paper}>
            <h3 id="transition-modal-title">
              Are you sure you want to finish?
            </h3>
            <Button
              variant="contained"
              className={classes.buttonLeft}
              onClick={handleClose}
            >
              Keep working out!
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleFinishWorkout()}
            >
              I'm done!
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  const { name, phase, variation } = state.user.currentWorkout;
  return {
    currentWorkout: state.user.currentWorkout,
    userId: state.user.id,
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

const mapDispatchToProps = dispatch => {
  return {
    updateUserInfo: userInfo => dispatch(updateUserInfo(userInfo)),
    setCurrentWorkoutStart: (userId, nextWorkout) =>
      dispatch(setCurrentWorkoutStart(userId, nextWorkout)),
    submitWorkoutStart: (userId, workoutData) =>
      dispatch(submitWorkoutStart(userId, workoutData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage);
