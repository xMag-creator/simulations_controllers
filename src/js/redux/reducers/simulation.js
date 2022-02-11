import { SET_SENSOR, SET_ACTUATOR } from "../actions/simulation";

const initialState = {
    sensor: 0,
    actuator: 0
};

const simulation = (state = initialState, action) => {
    switch (action.type) {
        case SET_SENSOR:
            return {...state, sensor: action.payload};
        case SET_ACTUATOR:
            return {...state, actuator: action.payload};
        default:
            return state;
    }
}

export default simulation;