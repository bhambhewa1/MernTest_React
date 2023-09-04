import { WEATHER_DATA } from "./actionCreator";



  export const getWeatherInfo = (data) => {
    try {
        // console.log("action called")
        return {
          type: WEATHER_DATA,
          data
        }
    } catch (err) {}
  };