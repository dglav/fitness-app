const collection3VariantB = {
  "Bench Press": {
    "4x6": {
      summary: {
        pr: {
          weight: 52.5,
          date: null
        },
        targetWeight: 55,
        last: {
          weight: 55,
          date: "2019/11/13",
          toPR: 5,
          repCount: [6, 6, 6, 1]
        },
        note: ""
      },
      completeHistory: {
        "2019/7/9": {
          weight: 55,
          pr: false,
          toPR: "",
          repCount: null
        },
        "2019/11/13": {
          weight: 55,
          pr: false,
          toPR: 0,
          repCount: [6, 6, 6, 1]
        }
      }
    }
  },
  "Front Squat": {
    "4x6": {
      summary: {
        pr: {
          weight: 37.5,
          date: "2019/11/13"
        },
        targetWeight: 40,
        last: {
          weight: 37.5,
          date: "2019/11/13",
          toPR: 0,
          repCount: [6, 6, 6, 6]
        },
        note: ""
      },
      completeHistory: {
        "2019/7/9": {
          weight: 37.5,
          pr: false,
          toPR: "",
          repCount: null
        },
        "2019/11/13": {
          weight: 37.5,
          pr: true,
          toPR: 0,
          repCount: [6, 6, 6, 6]
        }
      }
    }
  },
  "Barbell Row": {
    "4x6": {
      summary: {
        pr: {
          weight: 42.5,
          date: ""
        },
        targetWeight: 45,
        last: {
          weight: 45,
          date: "2019/11/13",
          toPR: 6,
          repCount: [6, 6, 6, 0]
        },
        note: "Forgot 4th set."
      },
      completeHistory: {
        "2019/7/9": {
          weight: 45,
          pr: false,
          toPR: "",
          repCount: null
        },
        "2019/11/13": {
          weight: 45,
          pr: false,
          toPR: 2,
          repCount: [6, 6, 6, 0]
        }
      }
    }
  },
  "Seated Delt Raise": {
    "2x10": {
      summary: {
        pr: {
          weight: 8,
          date: ""
        },
        targetWeight: 9,
        last: {
          weight: 9,
          date: "2019/11/13",
          toPR: 0,
          repCount: [10, 10]
        },
        note: "Redo exercise for better form before continuing"
      },
      completeHistory: {
        "2019/7/9": {
          weight: 9,
          pr: false,
          toPR: "",
          repCount: null
        },
        "2019/11/13": {
          weight: 9,
          pr: false,
          toPR: 0,
          repCount: [10, 10]
        }
      }
    }
  },
  "Lying Rear Delt Raise": {
    "2x10": {
      summary: {
        pr: {
          weight: 9,
          date: "2019/11/13"
        },
        targetWeight: 10,
        last: {
          weight: 9,
          date: "2019/11/13",
          toPR: 0,
          repCount: [10, 10]
        },
        note: ""
      },
      completeHistory: {
        "2019/7/9": {
          weight: 9,
          pr: false,
          toPR: "",
          repCount: null
        },
        "2019/11/13": {
          weight: 9,
          pr: true,
          toPR: 0,
          repCount: [10, 10]
        }
      }
    }
  }
};

export default collection3VariantB;
