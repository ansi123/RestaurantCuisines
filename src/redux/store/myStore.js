import rootReducer from '../reducer/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore,applyMiddleware} from 'redux';
import thunk from "redux-thunk";


const myStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default myStore;
