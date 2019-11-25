import UserTypes from "./user.types";

export const setCurrentWorkout = currentWorkout => ({
  type: "SET_CURRENT_WORKOUT",
  payload: currentWorkout
});

export const updateUserInfo = userInfo => ({
  type: "UPDATE_USER_INFO",
  payload: userInfo
});
