const INITIAL_STATE = {
  city: "all",
};

export const SelectCityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CITY":
      return {
        city: action.payload,
      };
    default:
      return state;
  }
};
