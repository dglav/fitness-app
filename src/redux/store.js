import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// Import combined roots
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

// Middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// Persist
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

// Logger
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(pReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
