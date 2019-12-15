import UserTypes from "./user.types";

export const setCurrentWorkoutStart = (userId, nextWorkout) => ({
  type: UserTypes.SET_CURRENT_WORKOUT_START,
  payload: { userId, nextWorkout }
});

export const setCurrentWorkoutFinish = currentWorkout => ({
  type: UserTypes.SET_CURRENT_WORKOUT_FINISH,
  payload: currentWorkout
});

export const updateUserInfo = userInfo => ({
  type: UserTypes.UPDATE_USER_INFO,
  payload: userInfo
});

export const fetchUserStart = userId => ({
  type: UserTypes.FETCH_USER_START,
  payload: userId
});

export const fetchUserFinish = userData => ({
  type: UserTypes.FETCH_USER_FINISH,
  payload: userData
});

export const submitWorkoutStart = (userId, workoutData) => ({
  type: UserTypes.SUBMIT_WORKOUT_START,
  payload: { userId, workoutData }
});

export const submitWorkoutFinish = () => ({
  type: UserTypes.SUBMIT_WORKOUT_FINISH
});

export const resetExercisesEdit = exerciseData => ({
  type: UserTypes.RESET_EXERCISES_EDIT,
  payload: exerciseData
});

export const updateExerciseEdit = exerciseData => ({
  type: UserTypes.UPDATE_EXERCISE,
  payload: exerciseData
});
