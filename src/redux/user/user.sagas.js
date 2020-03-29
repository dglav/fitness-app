import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  firestore,
  getDocumentsfromCollectionRef
} from "../../firebase/firebase.utils";

import UserTypes from "./user.types";
import { fetchUserFinish, setCurrentWorkoutFinish } from "./user.actions";

export function* fetchUser(action) {
  const userId = action.payload;
  const userRef = yield firestore.doc(`users/${userId}`).get();
  const historyRef = yield firestore.collection(`users/${userId}/history`);

  let userData = userRef.data();
  const userHistory = yield getDocumentsfromCollectionRef(historyRef);
  userData.history = userHistory;

  yield put(fetchUserFinish(userData));
}

export function* fetchUserStart() {
  yield takeLatest(UserTypes.FETCH_USER_START, fetchUser);
}

export function* setCurrentWorkout(action) {
  const { userId, nextWorkout } = action.payload;
  nextWorkout.date = new Date();
  const userRef = yield firestore.doc(`users/${userId}`);
  yield userRef.update({ currentWorkout: nextWorkout });
  yield put(setCurrentWorkoutFinish(nextWorkout));
}

export function* setCurrentWorkoutStart() {
  yield takeLatest(UserTypes.SET_CURRENT_WORKOUT_START, setCurrentWorkout);
}

export function* submitWorkout(action) {
  const { userId, workoutData } = action.payload;
  const now = new Date();
  const workoutExercises = Object.entries(workoutData.exercises);

  for (const [exerciseName, exerciseData] of workoutExercises) {
    const [repsAndSets, exerciseDetails] = Object.entries(exerciseData)[0];
    const exerciseHistoryRef = yield firestore.doc(
      `users/${userId}/history/${exerciseName}`
    );
    const exerciseHistory = yield exerciseHistoryRef.get();
    const exerciseHistoryData = exerciseHistory.data();

    yield console.log(exerciseName);
    yield console.log("original details: ", exerciseDetails);

    // UPDATE SUMMARY
    let updatedSummary = exerciseHistoryData[repsAndSets].summary;
    updatedSummary.last.date = now;

    yield console.log("Updated Summary", updatedSummary);

    // UPDATE COMPLETE HISTORY
    let updatedCompleteHistory =
      exerciseHistoryData[repsAndSets].completeHistory;
    const isPR = exerciseDetails.last.toPR <= 0;
    updatedCompleteHistory[now] = {
      pr: isPR,
      repCount: exerciseDetails.last.repCount,
      toPR: exerciseDetails.last.toPR,
      weight: exerciseDetails.last.weight
    };

    yield console.log("Updated Complete History", updatedCompleteHistory);
  }
}

export function* submitWorkoutStart() {
  yield takeLatest(UserTypes.SUBMIT_WORKOUT_START, submitWorkout);
}

export function* userSagas() {
  return yield all([
    call(fetchUserStart),
    call(setCurrentWorkoutStart),
    call(submitWorkoutStart)
  ]);
}
