import UserTypes from "./user.types";

const INITIAL_STATE = {
  isLoading: true
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
    default:
      return state;
  }
};

export default UserReducer;
