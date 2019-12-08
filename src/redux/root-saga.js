import { all, call } from "redux-saga/effects";

import { workoutSagas } from "./workouts/workouts.sagas";

export default function* rootSaga() {
  yield all([call(workoutSagas)]);
}
