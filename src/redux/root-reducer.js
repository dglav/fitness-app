import { combineReducers } from "redux";

import workoutsReducer from "./workouts/workouts.reducer";
import exercisesReducer from "./exercises/exercises.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  workouts: workoutsReducer,
  exercises: exercisesReducer,
  user: userReducer
});
