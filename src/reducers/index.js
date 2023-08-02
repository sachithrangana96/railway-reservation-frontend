import { combineReducers } from "redux";
import reservertionReducer from '../pages/home/slices/reservetion';
import bookingTrain from "../pages/booking/slices/bookingTrain";
import auth from "../pages/auth/slices/authSlice";
import station from "../pages/station/slices/stationSlice";
import profile from "../pages/profile/slices/profileSlice";

const rootReducer = combineReducers({
    reservetion : reservertionReducer,
    bookingTrain : bookingTrain,
    auth:auth,
    station:station,
    profile:profile
});

export default rootReducer;