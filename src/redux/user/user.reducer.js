import UserTypes from "./user.types";

const INITIAL_STATE = {
  displayName: "Drew",
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
  },
  currentWorkout: {
    name: "Beastmode Bulking",
    phase: 3,
    variation: "A",
    description: "Phase III: Max Gains",
    exercises: {
      "Barbell Squat": {
        "4x6": {
          currentTarget: 57.5,
          last: {
            repCount: ["n/a", "n/a", "n/a", "n/a"]
          }
        }
      },
      "Dumbbell Shoulder Press": {
        "4x6": {
          currentTarget: 18,
          last: {
            repCount: ["n/a", "n/a", "n/a", "n/a"]
          }
        }
      },
      "Lat Pulldown: Narrow Grip": {
        "4x6": {
          currentTarget: 60.8,
          last: {
            weight: 60.8,
            date: "2019/11/10",
            toPR: 2,
            note: "",
            repCount: [6, 6, 6, 4]
          }
        }
      },
      "Close Grip Bench Press": {
        "2x10": {
          currentTarget: 47.5,
          last: {
            weight: 47.5,
            date: "2019/11/10",
            toPR: 4,
            note: "",
            repCount: [10, 6]
          }
        }
      },
      "Hammer Curl": {
        "2x10": {
          currentTarget: 14,
          last: {
            weight: 14,
            date: "2019/11/10",
            toPR: 4,
            note: "",
            repCount: [10, 4]
          }
        }
      }
    }
  },
  history: {
    "Barbell Squat": {
      "4x6": {
        summary: {
          pr: {
            weight: 55,
            date: "2019/11/10"
          },
          currentTarget: 57.5,
          last: {
            weight: 55,
            date: "2019/11/10",
            toPR: 0,
            note: "",
            repCount: [6, 6, 6, 6]
          }
        },
        completeHistory: {
          "2019/7/7": {
            target: 55,
            pr: false,
            toPR: ""
          },
          "2019/11/10": {
            target: 55,
            pr: true,
            toPR: 0
          }
        }
      }
    },
    "Dumbbell Shoulder Press": {
      "4x6": {
        summary: {
          pr: {
            weight: 16,
            date: "2019/11/10"
          },
          currentTarget: 18,
          last: {
            weight: 16,
            date: "2019/11/10",
            toPR: 0,
            note: "",
            repCount: [6, 6, 6, 6]
          }
        },
        completeHistory: {
          "2019/7/7": {
            target: 16,
            pr: false,
            toPR: ""
          },
          "2019/11/10": {
            target: 16,
            pr: true,
            toPR: 0
          }
        }
      }
    },
    "Lat Pulldown: Narrow Grip": {
      "4x6": {
        summary: {
          pr: {
            weight: 58.3,
            date: ""
          },
          currentTarget: 60.8,
          last: {
            weight: 60.8,
            date: "2019/11/10",
            toPR: 2,
            note: "",
            repCount: [6, 6, 6, 4]
          }
        },
        completeHistory: {
          "2019/7/7": {
            target: 60.8,
            pr: false,
            toPR: ""
          },
          "2019/11/10": {
            target: 60.8,
            pr: true,
            toPR: 2
          }
        }
      }
    },
    "Close Grip Bench Press": {
      "2x10": {
        summary: {
          pr: {
            weight: 45,
            date: ""
          },
          currentTarget: 47.5,
          last: {
            weight: 47.5,
            date: "2019/11/10",
            toPR: 4,
            note: "",
            repCount: [10, 6]
          }
        },
        completeHistory: {
          "2019/7/7": {
            target: 47.5,
            pr: false,
            toPR: ""
          },
          "2019/11/10": {
            target: 47.5,
            pr: true,
            toPR: 4
          }
        }
      }
    },
    "Hammer Curl": {
      "2x10": {
        summary: {
          pr: {
            weight: 12,
            date: ""
          },
          currentTarget: 14,
          last: {
            weight: 14,
            date: "2019/11/10",
            toPR: 4,
            note: "",
            repCount: [10, 4]
          }
        },
        completeHistory: {
          "2019/7/7": {
            target: 14,
            pr: false,
            toPR: ""
          },
          "2019/11/10": {
            target: 14,
            pr: true,
            toPR: 4
          }
        }
      }
    }
  }
};

const UserReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case UserTypes.SET_CURRENT_WORKOUT:
      return {
        ...state,
        currentWorkout: action.payload
      };
    case UserTypes.UPDATE_USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default UserReducer;
