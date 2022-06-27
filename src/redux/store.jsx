import {createStore, combineReducers} from 'redux'
import { Authreducer } from '../AuthRedux/Authreducer';
import { Reducer } from './Reducer'

const rootReducer = combineReducers({Reducer, Authreducer});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())