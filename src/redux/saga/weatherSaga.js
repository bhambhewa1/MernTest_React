import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_ERROR, SET_WEATHER_DATA, WEATHER_DATA } from '../action/actionCreator';
import { toast } from 'react-toastify';
import { WeatherApi } from '../services';

function* getWeather(data) {
    try {
        // Two ways to fetch api first direct enter url in below commentted code and second through services

        // console.log("get data from action in saga ",data?.data)
        // let data1 = yield fetch(`https://api.weatherapi.com/v1/current.json?key=18d6d64ca62a4b8da1260436233108&q=${data?.data}`);
        // data1 = yield data1.json();

        let data1 = yield call(WeatherApi.weatherInformation, data?.data) // Calling to API using services

        if (data1?.error) {
            throw new Error(JSON.stringify(data1.error));
        }
        yield put({ type: SET_WEATHER_DATA, data: data1 })

    } catch (err) {
        // console.log("error message... ", JSON.parse(err?.message)?.message)
        // Set error message in toastify to show error on right-bottom on a page

        yield toast.error(JSON.parse(err?.message)?.code === 1003 ? "Please enter city,country_code" : JSON.parse(err?.message)?.message);
        yield put({ type: FETCH_ERROR, error: JSON.parse(err?.message) })
    }
}


function* weatherSaga() {
    yield takeEvery(WEATHER_DATA, getWeather)
}

export default weatherSaga;
