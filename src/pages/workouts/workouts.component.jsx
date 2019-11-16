import React from "react";

import WorkoutTitle from "../../components/workout-title/workout-title.component";
import WorkoutCard from "../../components/workout-card/workout-card.component";

const WorkoutPage = ({ workoutData, currentWorkout }) => {
  return (
    <div id="workout-page">
      <WorkoutTitle currentWorkout={currentWorkout}></WorkoutTitle>
      <WorkoutCard></WorkoutCard>
    </div>
  );
};

export default WorkoutPage;
