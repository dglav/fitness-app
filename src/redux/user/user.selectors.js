import { createSelector } from "reselect";

export const selectUserHistory = state => state.user.history;

export const selectExerciseHistorySummary = exercises =>
  createSelector([selectUserHistory], userHistory => {
    let exerciseHistorySummary = {};
    Object.entries(exercises).forEach(([exercise, repsAndSets]) => {
      exerciseHistorySummary[exercise] = {};
      exerciseHistorySummary[exercise][repsAndSets] =
        userHistory[exercise][repsAndSets].summary;
    });
    return exerciseHistorySummary;
  });
