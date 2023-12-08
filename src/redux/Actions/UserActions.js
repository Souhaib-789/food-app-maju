import { UserActionTypes } from "../ActionTypes/UserActionTypes";

class UserActions {
  static setUser = (user) => {
    return {
      type: UserActionTypes.LOGIN_USER,
      payload: user,
    };
  };

  static logoutUser = (user) => {
    return {
      type: UserActionTypes.LOGIN_USER,
      payload: user,
    };
  };
}

export default UserActions;
