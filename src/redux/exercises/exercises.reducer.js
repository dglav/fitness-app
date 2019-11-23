import ExerciseActionTypes from "./exercises.types";

const INITIAL_STATE = {};

const ExercisesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExerciseActionTypes.UPDATE_EXERCISES:
      return action.payload;
    default:
      return state;
  }
};

export default ExercisesReducer;
