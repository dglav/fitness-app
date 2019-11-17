const INITIAL_STATE = {
  currentWorkout: {
    name: null,
    phase: null,
    variation: null,
    description: null
  }
};

const workoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_WORKOUT":
      return {
        ...state,
        currentWorkout: action.payload
      };
    default:
      return state;
  }
};

export default workoutReducer;
