import { Api } from "../../config/Request"

export const weatherInformation = async (data) => {
    return Api.getRequest("https://api.weatherapi.com/v1/current.json?key=18d6d64ca62a4b8da1260436233108&q=", data);
}

export const WeatherApi = {
    weatherInformation
}