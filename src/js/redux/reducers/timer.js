import { START, STOP, TOGGLE_TIME } from "../actions/timer";

const initialState = {
    toggle: false,
    working: false,
};

const timeToggle = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TIME:
            return {...state, toggle: !state.toggle};
        case START:
            return {...state, working: true};
        case STOP:
            return {...state, working: false};
        default:
            return state;
    }
};

export default timeToggle;