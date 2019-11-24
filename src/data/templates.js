export const initialExerciseHistoryData = (
  exerciseName,
  repsAndSets,
  currentTarget
) => {
  let initialData = {};
  initialData[exerciseName][repsAndSets] = {
    summary: {
      pr: {
        weight: null,
        date: null
      },
      currentTarget: currentTarget,
      last: {
        weight: null,
        date: null,
        toPR: null,
        note: null,
        repCount: null
      }
    },
    completeHistory: {}
  };
  return initialData;
};
