export const SET_SENSOR = 'SET_SENSOR';
export const SET_ACTUATOR = 'SET_ACTUATOR';

export const setSensor = (payload) => ({
    type: SET_SENSOR,
    payload,
});

export const setActuator = (payload) => ({
    type: SET_ACTUATOR,
    payload,
});