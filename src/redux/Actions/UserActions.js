import { UserActionTypes } from "../ActionTypes/UserActionTypes";

class UserActions {
  static setUser = (user) => {
    return {
      type: UserActionTypes.LOGIN_USER,
      payload: user,
    };
  };

  static logoutUser = (navigate) => {
    return {
      type: UserActionTypes.LOGOUT_USER,
      payload: navigate
    };
  };
}

export default UserActions;
