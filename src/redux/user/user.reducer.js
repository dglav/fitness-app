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
      return {
        ...state,
        currentWorkout: {
          ...state.currentWorkout,
          exercises: action.payload
        }
      };
    case UserTypes.UPDATE_EXERCISE_EDIT:
      const updatedExercise = action.payload;

      return {
        ...state,
        currentWorkout: {
          ...state.currentWorkout,
          exercises: {
            ...state.currentWorkout.exercises,
            ...updatedExercise
          }
        }
      };
    default:
      return state;
  }
};

export default UserReducer;
