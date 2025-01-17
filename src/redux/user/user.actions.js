import UserTypes from "./user.types";

export const setCurrentWorkout = currentWorkout => ({
  type: UserTypes.SET_CURRENT_WORKOUT,
  payload: currentWorkout
});

export const updateUserInfo = userInfo => ({
  type: UserTypes.UPDATE_USER_INFO,
  payload: userInfo
});
