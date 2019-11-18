const data = {
  users: {
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
      },
      history: {}
    }
  },
  workouts: {
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
  },
  exercises: {
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
  },
  history: {
    drew: {
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
  }
};

export default data;
