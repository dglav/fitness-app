import { createSelector } from "reselect";

export const selectUserHistory = state => state.user.history;

export const selectExerciseHistorySummary = createSelector(
  [selectUserHistory],
  userHistory => {
    console.log(userHistory);
  }
);
