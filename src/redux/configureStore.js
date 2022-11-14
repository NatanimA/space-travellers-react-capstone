import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import logger from 'redux-logger';

const reducer = combineReducers({missions:missionsReducer})

const store = createStore(reducer,applyMiddleware(logger,thunk))

export default store;