import { combineReducers } from "redux";

import timeToggle from "./timer";
import simulation from "./simulation";


export default combineReducers({
    timeToggle,
    simulation,
});