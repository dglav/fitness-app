import workoutTypes from "./workout.types";

export const addNewWorkout = workout => {
  return {
    type: workoutTypes.CREATE_NEW_WORKOUT,
    payload: workout
  };
};

export const updateWorkout = workout => {
  return {
    type: workoutTypes.UPDATE_WORKOUT,
    payload: workout
  };
};

export const fetchWorkoutsStart = () => {
  return {
    type: workoutTypes.FETCH_WORKOUTS_START
  };
};

export const fetchWorkoutsFinish = allWorkouts => {
  return {
    type: workoutTypes.FETCH_WORKOUTS_FINISH,
    payload: allWorkouts
  };
};
