const INITIAL_STATE = {
  "Barbell Squat": {
    repsAndSets: ["4x6"]
  },
  "Dumbbell Shoulder Press": {
    repsAndSets: ["4x6"]
  },
  "Lat Pulldown: Narrow Grip": {
    repsAndSets: ["4x6"]
  },
  "Close Grip Bench Press": {
    repsAndSets: ["2x10"]
  },
  "Hammer Curl": {
    repsAndSets: ["2x10"]
  }
};

const ExercisesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ExercisesReducer;
