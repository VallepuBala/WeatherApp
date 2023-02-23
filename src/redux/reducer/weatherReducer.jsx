const initialState = {
    isLoading: false,
    weatherData: null,
    error: null,
  };
  
  const weatherReducer=(state = initialState, action) => {
    switch (action.type) {
      case "FETCH_WEATHER_START":
        return {
          ...state,
          isLoading: true,
        };
      case "FETCH_WEATHER_SUCCESS":
        return {
          ...state,
          isLoading: false,
          weatherData: action.payload,
        };
      case "FETCH_WEATHER_ERROR":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default weatherReducer;