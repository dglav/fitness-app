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
      currentWorkout: {
        name: "Beastmode Bulking",
        variation: ""
      }
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
          description: "Phase 3: Foundations",
          exercises: {
            "Barbell Squat": "4x6",
            "Dumbell Shoulder Press": "4x6",
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
      repsAndSets: {
        "4x6": {
          drew: {
            pr: {
              weight: 55,
              date: "2019/11/10"
            },
            target: {
              weight: 57.5
            },
            last: {
              weight: 55,
              date: "2019/11/10",
              toPR: 0,
              note: ""
            }
          }
        }
      }
    },
    "Dumbbell Shoulder Press": {
      repsAndSets: {
        "4x6": {
          drew: {
            pr: {
              weight: 16,
              date: "2019/11/10"
            },
            target: {
              weight: 18
            },
            last: {
              weight: 16,
              date: "2019/11/10",
              toPR: 0,
              note: ""
            }
          }
        }
      }
    },
    "Lat Pulldown: Narrow Grip": {
      repsAndSets: {
        "4x6": {
          drew: {
            pr: {
              weight: 58.3,
              date: ""
            },
            target: {
              weight: 60.8
            },
            last: {
              weight: 60.8,
              date: "2019/11/10",
              toPR: 2,
              note: ""
            }
          }
        }
      }
    },
    "Close Grip Bench Press": {
      repsAndSets: {
        "2x10": {
          drew: {
            pr: {
              weight: 45,
              date: ""
            },
            target: {
              weight: 47.5
            },
            last: {
              weight: 47.5,
              date: "2019/11/10",
              toPR: 4,
              note: ""
            }
          }
        }
      }
    },
    "Hammer Curl": {
      repsAndSets: {
        "2x10": {
          drew: {
            pr: {
              weight: 12,
              date: ""
            },
            target: {
              weight: 14
            },
            last: {
              weight: 14,
              date: "2019/11/10",
              toPR: 4,
              note: ""
            }
          }
        }
      }
    }
  },
  history: {
    drew: {
      "Barbell Squat": {
        "4x6": {
          "2019/7/7": {
            target: 55,
            pr: false,
            toPR: ""
          },
          "2019/11/11": {
            target: 55,
            pr: true,
            toPR: 0
          }
        }
      },
      "Dumbbell Shoulder Press": {
        "4x6": {
          "2019/7/7": {
            target: 16,
            pr: false,
            toPR: ""
          },
          "2019/11/11": {
            target: 16,
            pr: true,
            toPR: 0
          }
        }
      },
      "Lat Pulldown: Narrow Grip": {
        "4x6": {
          "2019/7/7": {
            target: 60.8,
            pr: false,
            toPR: ""
          },
          "2019/11/11": {
            target: 60.8,
            pr: true,
            toPR: 2
          }
        }
      },
      "Close Grip Bench Press": {
        "4x6": {
          "2019/7/7": {
            target: 47.5,
            pr: false,
            toPR: ""
          },
          "2019/11/11": {
            target: 47.5,
            pr: true,
            toPR: 4
          }
        }
      },
      "Hammer Curl": {
        "4x6": {
          "2019/7/7": {
            target: 14,
            pr: false,
            toPR: ""
          },
          "2019/11/11": {
            target: 14,
            pr: true,
            toPR: 4
          }
        }
      }
    }
  }
};

export default data;
