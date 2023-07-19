import { combineReducers } from "redux";
import reservertionReducer from '../pages/home/slices/reservetion';

const rootReducer = combineReducers({
    reservetion : reservertionReducer
});

export default rootReducer;