import reducer from './reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    data: reducer,
});

export default rootReducer;