import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

import { firestore } from "../../firebase/firebase.utils";
import {
  updateUserInfo,
  setCurrentWorkoutStart
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
  setCurrentWorkoutStart
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const exercises = currentWorkout.exercises;
  const classes = useStyles();

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
    const nextWorkout = {
      ...currentWorkout,
      variation: nextWorkoutVariation,
      exercises: nextVariationExercises
    };
    // submitWorkoutStart({userId, currentWorkout});
    setCurrentWorkoutStart(userId, nextWorkout);
  };

  return (
    <div id="workout-page">
      <WorkoutTitle
        onFinishWorkout={() => initiateWorkoutFinish()}
      ></WorkoutTitle>
      {Object.keys(exercises).map(exercise => {
        const name = exercise;
        const repsAndSets = Object.keys(exercises[name])[0];
        const { targetWeight, last } = exercises[name][repsAndSets];
        return (
          <WorkoutCard
            key={name}
            exerciseName={name}
            repsAndSets={repsAndSets}
            targetWeight={targetWeight}
            last={last}
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
              onClick={handleFinishWorkout}
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
  console.log(state);
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
      dispatch(setCurrentWorkoutStart(userId, nextWorkout))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage);
