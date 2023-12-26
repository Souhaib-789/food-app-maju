import { UserActionTypes } from "../ActionTypes/UserActionTypes";

const INITIAL_STATE = {
  user: {},
};

export const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UserActionTypes.LOGOUT_USER:
      return {
        user: {},
      };
    default:
      return state;
  }
};
