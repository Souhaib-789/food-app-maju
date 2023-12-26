import { UserActionTypes } from "../ActionTypes/UserActionTypes";

class UserActions {
  static setUser = (user) => {
    return {
      type: UserActionTypes.LOGIN_USER,
      payload: user,
    };
  };

  static logoutUser = () => {
    return {
      type: UserActionTypes.LOGIN_USER,
    };
  };
}

export default UserActions;
