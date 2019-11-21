import React from "react";
import { connect } from "react-redux";

import WorkoutTitle from "../../components/workout-title/workout-title.component";
import WorkoutCard from "../../components/workout-card/workout-card.component";

const getCurrentExercises = (allWorkouts, currentWorkout, exerciseHistory) => {
  const { name, phase, variation } = currentWorkout;
  const workoutExercises = allWorkouts[name][phase][variation].exercises;
  return Object.entries(workoutExercises).map(exercise => {
    return {
      name: exercise[0],
      repsAndSets: exercise[1],
      details: exerciseHistory[exercise[0]][exercise[1]].summary
    };
  });
};

const WorkoutPage = ({ allWorkouts, currentWorkout, exerciseHistory }) => {
  const currentExercises = currentWorkout.name
    ? getCurrentExercises(allWorkouts, currentWorkout, exerciseHistory)
    : null;

  return (
    <div id="workout-page">
      <WorkoutTitle></WorkoutTitle>
      {currentExercises
        ? currentExercises.map(exercise => {
            return (
              <WorkoutCard
                key={exercise.name}
                exercise={exercise}
              ></WorkoutCard>
            );
          })
        : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentWorkout: state.users.drew.currentWorkout,
    allWorkouts: state.workouts.allWorkouts,
    exerciseHistory: state.users.drew.exerciseHistory
  };
};

export default connect(mapStateToProps)(WorkoutPage);
