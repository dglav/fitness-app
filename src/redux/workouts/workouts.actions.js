import workoutTypes from "./workout.types";

export const addNewWorkout = workout => {
  return {
    action: workoutTypes.CREATE_NEW_WORKOUT,
    payload: workout
  };
};

export const updateWorkout = workout => {
  return {
    action: workoutTypes.UPDATE_WORKOUT,
    payload: workout
  };
};
