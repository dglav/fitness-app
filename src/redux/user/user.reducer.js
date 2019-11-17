const INITIAL_STATE = {
  drew: {
    workoutDates: {},
    workouts: {},
    bodyWeight: {
      "2019/3/25": 58.8,
      "2019/4/19": 61.8,
      "2019/5/20": 65,
      "2019/9/15": 66.5,
      "2019/11/3": 64.8
    },
    nextWorkout: {
      name: "Beastmode Bulking",
      phase: 3,
      variation: "A",
      description: "Phase III: Max Gains"
    }
  }
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default UserReducer;
