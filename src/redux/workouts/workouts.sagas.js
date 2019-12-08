import { takeLatest, all, call, put } from "redux-saga/effects";

import {
  firestore,
  getDocumentsfromCollectionRef
} from "../../firebase/firebase.utils";

import WorkoutActionTypes from "./workout.types";
import { fetchWorkoutsFinish } from "./workouts.actions";

export function* fetchWorkouts() {
  try {
    const workoutsRef = firestore.collection("workouts");
    console.log(workoutsRef);
    const allWorkouts = yield getDocumentsfromCollectionRef(workoutsRef);
    console.log(allWorkouts);
    yield put(fetchWorkoutsFinish(allWorkouts));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(WorkoutActionTypes.FETCH_WORKOUTS_START, fetchWorkouts);
}

export function* workoutSagas() {
  yield all([call(fetchCollectionsStart)]);
}
