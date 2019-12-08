import { createSelector } from "reselect";

export const selectAllWorkouts = state => {
  return state.workouts.allWorkouts;
};

export const selectWorkoutPhase = (name, phase) => {
  return createSelector([selectAllWorkouts], allWorkouts => {
    return allWorkouts[name][phase];
  });
};

export const selectWorkoutVariations = (name, phase) =>
  createSelector([selectWorkoutPhase(name, phase)], workoutPhase => {
    return workoutPhase.variations;
  });

export const selectWorkoutVariation = (name, phase, variation) =>
  createSelector(
    [selectWorkoutVariations(name, phase)],
    workoutVariations => workoutVariations[variation]
  );

export const selectNextWorkoutVariation = (name, phase, variation) => {
  return createSelector(
    [selectWorkoutVariations(name, phase)],
    workoutVariations => {
      const variationKeys = Object.keys(workoutVariations);
      const lastVariationInWorkout = variationKeys.reduce(
        (accumulator, currentValue) => {
          return currentValue.charCodeAt(0) > accumulator.charCodeAt(0)
            ? currentValue
            : accumulator;
        },
        variationKeys[0]
      );
      const nextVariation =
        lastVariationInWorkout === variation
          ? "A"
          : String.fromCharCode(variation.charCodeAt(0) + 1);
      return nextVariation;
    }
  );
};

export const selectVariationExercises = (name, phase, variation) => {
  return createSelector(
    [
      selectNextWorkoutVariation(name, phase, variation),
      selectWorkoutVariations(name, phase)
    ],
    (nextVariation, workoutVariations) => {
      return workoutVariations[nextVariation].exercises;
    }
  );
};
