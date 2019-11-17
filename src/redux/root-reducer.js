import { combineReducers } from "redux";

import workoutReducer from "./workout/workout.reducer";

export default combineReducers({
  workout: workoutReducer
});
