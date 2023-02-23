export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch({ type: "FETCH_WEATHER_START" });
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52f31c0108dd91c4c34f9a8c36d35cba&units=metric`)
            .then((response) => response.json())
            .then((weatherData) => {
                dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: weatherData });
            })
            .catch((error) => {
                dispatch({ type: "FETCH_WEATHER_ERROR", payload: error });
            });
    };
};