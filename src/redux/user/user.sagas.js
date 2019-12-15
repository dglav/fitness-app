import { takeLatest, takeLeading, put, all, call } from "redux-saga/effects";
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
  const userRef = yield firestore.doc(`users/${userId}`);
  yield userRef.update({ currentWorkout: nextWorkout });
  yield put(setCurrentWorkoutFinish(nextWorkout));
}

export function* setCurrentWorkoutStart() {
  yield takeLatest(UserTypes.SET_CURRENT_WORKOUT_START, setCurrentWorkout);
}

export function* submitWorkout(action) {
  const { userId, workoutData } = action.payload;
  const userRef = yield firestore.doc(`users/${userId}`);
  yield console.log(workoutData);
}

export function* submitWorkoutStart() {
  yield takeLeading(UserTypes.SUBMIT_WORKOUT_START, submitWorkout);
}

export function* userSagas() {
  return yield all([
    call(fetchUserStart),
    call(setCurrentWorkoutStart),
    call(submitWorkoutStart)
  ]);
}
