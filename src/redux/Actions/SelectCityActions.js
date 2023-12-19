class SelectCityActions {
  static setCity = (city) => {
    return {
      type: "SET_CITY",
      payload: city,
    };
  };
}

export default SelectCityActions;
