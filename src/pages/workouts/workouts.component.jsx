import React from "react";
import { connect } from "react-redux";

import WorkoutTitle from "../../components/workout-title/workout-title.component";
import WorkoutCard from "../../components/workout-card/workout-card.component";

const WorkoutPage = ({ exercises }) => {
  return (
    <div id="workout-page">
      <WorkoutTitle></WorkoutTitle>
      {exercises.map(exercise => {
        return (
          <WorkoutCard key={exercise.name} exercise={exercise}></WorkoutCard>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentWorkout: state.workout.currentWorkout
  };
};

export default connect(mapStateToProps)(WorkoutPage);
