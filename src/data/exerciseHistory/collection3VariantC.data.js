const collection3VariantC = {
  "Romanian Deadlift": {
    "4x6": {
      summary: {
        pr: {
          weight: 62.5,
          date: "2019/7/11"
        },
        targetWeight: 65,
        last: {
          weight: 65,
          date: "2019/11/17",
          toPR: null,
          repCount: null
        },
        note: ""
      },
      completeHistory: {
        "2019/7/11": {
          weight: 62.5,
          pr: true,
          toPR: 0,
          repCount: [6, 6, 6, 6]
        },
        "2019/11/17": {
          weight: 65,
          pr: false,
          toPR: null,
          repCount: null
        }
      }
    }
  },
  "Incline Bench Press": {
    "4x6": {
      summary: {
        pr: {
          weight: 35,
          date: "2019/11/17"
        },
        targetWeight: 37.5,
        last: {
          weight: 35,
          date: "2019/11/17",
          toPR: 0,
          repCount: [6, 6, 6, 6]
        },
        note: "Fourth hole"
      },
      completeHistory: {
        "2019/7/11": {
          weight: 35,
          pr: false,
          toPR: "",
          repCount: null
        },
        "2019/11/17": {
          weight: 35,
          pr: true,
          toPR: 0,
          repCount: [6, 6, 6, 6]
        }
      }
    }
  },
  "Pull Ups (Wide Grip)": {
    "4xMAX": {
      summary: {
        pr: {
          weight: "Body Weight",
          date: "2019/7/11",
          totalReps: 36
        },
        targetWeight: "Body Weight",
        last: {
          weight: "Body Weight",
          date: "2019/11/17",
          repCount: [14, 6, 5, 6]
        },
        note: ""
      },
      completeHistory: {
        "2019/7/11": {
          weight: "Body Weight",
          pr: false,
          repCount: [16, 10, 4, 6]
        },
        "2019/11/17": {
          weight: "Body Weight",
          pr: false,
          repCount: [14, 6, 5, 6]
        }
      }
    }
  },
  "Decline Situps": {
    "2xMAX": {
      summary: {
        pr: {
          weight: "Body Weight",
          date: "2019/7/11",
          totalReps: 35
        },
        targetWeight: "Body Weight",
        last: {
          weight: "Body Weight",
          date: "2019/7/11",
          repCount: [25, 10]
        },
        note: ""
      },
      completeHistory: {
        "2019/7/11": {
          weight: "Body Weight",
          toPR: null,
          repCount: [25, 10]
        }
      }
    }
  },
  "Hanging Leg Raise": {
    "2xMAX": {
      summary: {
        pr: {
          weight: "Body Weight",
          date: "2019/7/11",
          totalReps: 11
        },
        targetWeight: "Body Weight",
        last: {
          weight: "Body Weight",
          date: "2019/7/11",
          repCount: [6, 5]
        },
        note: ""
      },
      completeHistory: {
        "2019/7/11": {
          weight: "Body Weight",
          pr: false,
          repCount: [6, 5]
        }
      }
    }
  }
};

export default collection3VariantC;
