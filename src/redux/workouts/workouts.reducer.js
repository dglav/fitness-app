import workoutTypes from "./workout.types";

const INITIAL_STATE = {
  isLoading: true
};

const workoutsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case workoutTypes.FETCH_WORKOUTS_START:
      return {
        ...state,
        isLoading: true
      };
    case workoutTypes.FETCH_WORKOUTS_FINISH:
      return {
        ...state,
        allWorkouts: action.payload,
        isLoading: false
      };
    case workoutTypes.UPDATE_WORKOUT:
      return {
        ...state,
        allWorkouts: action.payload
      };
    default:
      return state;
  }
};

export default workoutsReducer;
