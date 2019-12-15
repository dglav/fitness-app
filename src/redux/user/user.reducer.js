import UserTypes from "./user.types";

const INITIAL_STATE = {
  isLoading: true,
  currentExercises: {}
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SET_CURRENT_WORKOUT_START:
      return {
        ...state
      };
    case UserTypes.SET_CURRENT_WORKOUT_FINISH:
      return {
        ...state,
        currentWorkout: action.payload
      };
    case UserTypes.UPDATE_USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    case UserTypes.FETCH_USER_START:
      return {
        ...state,
        isLoading: true
      };
    case UserTypes.FETCH_USER_FINISH:
      return {
        ...state,
        isLoading: false,
        ...action.payload
      };
    case UserTypes.SUBMIT_WORKOUT_START:
      return {
        ...state
      };
    case UserTypes.SUBMIT_WORKOUT_FINISH:
      return {
        ...state
      };
    case UserTypes.RESET_EXERCISES_EDIT:
      console.log(action.payload);
      return {
        ...state,
        currentExercises: action.payload
      };
    case UserTypes.UPDATE_EXERCISE_EDIT:
      // const updatedExercise = action.payload;
      // console.log(state);
      return {
        ...state,
        currentExercises: {
          ...state.currentExercises
        }
      };
    default:
      return state;
  }
};

export default UserReducer;
