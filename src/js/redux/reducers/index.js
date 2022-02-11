import { combineReducers } from "redux";

import timeToggle from "./time";
import simulation from "./simulation";


export default combineReducers({
    timeToggle,
    simulation,
});