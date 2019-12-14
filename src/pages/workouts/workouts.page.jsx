import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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

const styles = theme => ({
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
  }
});

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

  useEffect(() => {
    const userId = "98357273";
    const userRef = firestore.collection(`users`).doc(userId);
    const unsubscribeFromSnapshot = userRef.onSnapshot(snapshot => {
      updateUserInfo(snapshot.data());
    });
    return () => unsubscribeFromSnapshot();
  }, []);

  const handleFinishWorkout = () => {
    const nextWorkout = {
      ...currentWorkout,
      variation: nextWorkoutVariation,
      exercises: nextVariationExercises
    };
    setCurrentWorkoutStart({ userId, currentWorkout: nextWorkout });
  };

  return (
    <div id="workout-page">
      <WorkoutTitle
        onFinishWorkout={() => handleFinishWorkout()}
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
    setCurrentWorkoutStart: nextWorkout =>
      dispatch(setCurrentWorkoutStart(nextWorkout))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage);
