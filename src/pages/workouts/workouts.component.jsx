import React from "react";

import WorkoutTitle from "../../components/workout-title/workout-title.component";
import WorkoutCard from "../../components/workout-card/workout-card.component";

const WorkoutPage = ({ exercises, nextWorkout }) => {
  return (
    <div id="workout-page">
      <WorkoutTitle nextWorkout={nextWorkout}></WorkoutTitle>
      {exercises.map(exercise => {
        return (
          <WorkoutCard key={exercise.name} exercise={exercise}></WorkoutCard>
        );
      })}
    </div>
  );
};

export default WorkoutPage;
