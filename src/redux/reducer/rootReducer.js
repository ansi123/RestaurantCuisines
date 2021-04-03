import reducer from './reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    datat: reducer,
});

export default rootReducer;
