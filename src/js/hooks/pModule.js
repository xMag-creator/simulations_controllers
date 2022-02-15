const p_module = (target, sensor, enhancement) => {
    return (target - sensor) * enhancement;
};

export default p_module;