export const TOGGLE_TIME = 'COUNT_TIME';
export const START = 'START';
export const STOP = 'STOP';

let timer = null;
export const deltaTime = 100;

export const startSimulation = () => (dispatch) => {
    timer = setInterval(() => {
        dispatch(toggleTime());
    }, deltaTime);
    dispatch(start());
}

export const stopSimulation = () => (dispatch) => {
    clearInterval(timer);
    dispatch(stop());
}

export const toggleTime = () => ({
    type: TOGGLE_TIME,
});

export const start = () => ({
    type: START,
});

export const stop = () => ({
    type: STOP,
});