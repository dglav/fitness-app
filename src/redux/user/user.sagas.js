import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  firestore,
  getDocumentsfromCollectionRef
} from "../../firebase/firebase.utils";

import UserTypes from "./user.types";
import { fetchUserFinish } from "./user.actions";

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

export function* userSagas() {
  return yield all([call(fetchUserStart)]);
}
