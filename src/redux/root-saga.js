import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.sagas";
import { workoutSagas } from "./workouts/workouts.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(workoutSagas)]);
}
