const INITIAL_STATE = {
  allWorkouts: {
    "Beastmode Bulking": {
      "1": {
        description: "Phase I: Foundations"
      },
      "2": {
        description: "Phase II: Accelaration"
      },
      "3": {
        description: "Phase III: Max Gains",
        A: {
          exercises: {
            "Barbell Squat": "4x6",
            "Dumbbell Shoulder Press": "4x6",
            "Lat Pulldown: Narrow Grip": "4x6",
            "Close Grip Bench Press": "2x10",
            "Hammer Curl": "2x10"
          }
        }
      }
    }
  }
};

const workoutsReducer = (state = INITIAL_STATE, action) => {
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

export default workoutsReducer;
