import ExerciseActionTypes from "./exercises.types";

export const updateExercises = exercisesMap => {
  return {
    type: ExerciseActionTypes.UPDATE_EXERCISES,
    payload: exercisesMap
  };
};
