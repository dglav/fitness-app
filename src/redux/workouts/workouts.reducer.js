import workoutTypes from "./workout.types";

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
        variations: {
          A: {
            exercises: {
              "Barbell Squat": "4x6",
              "Dumbbell Shoulder Press": "4x6",
              "Lat Pulldown: Narrow Grip": "4x6",
              "Close Grip Bench Press": "2x10",
              "Hammer Curl": "2x10"
            }
          },
          B: {
            exercises: {
              "Bench Press": "4x6",
              "Front Squat": "4x6",
              "Barbell Row": "4x6",
              "Seated Delt Raise": "2x10",
              "Lying Rear Delt Raise": "2x10"
            }
          },
          C: {
            exercises: {
              "Romanian Deadlift": "4x6",
              "Incline Bench Press": "4x6",
              "Pull Ups (wide grip)": "4xMAX",
              "Decline Sit Ups": "2xMAX",
              "Hanging Leg Raise": "2xMAX"
            }
          },
          D: {
            exercises: {
              "Barbell Military Press": "4x6",
              "Bulgarian Split Squat": "4x6",
              "Dumbbell Seal Row": "4x6",
              "Barbell Upright Row": "2x10",
              "Concentration Curl": "2x10"
            }
          }
        }
      }
    }
  }
};

const workoutsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
