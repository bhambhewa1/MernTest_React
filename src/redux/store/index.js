import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import weatherSaga from "../saga/weatherSaga";
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(weatherSaga);

export default store;
