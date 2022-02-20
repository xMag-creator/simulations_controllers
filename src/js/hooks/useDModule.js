const useDModule = (target, sensor, last, enhancement, setLastError) => {
    const throttle = ((target - sensor) - last) * enhancement;
    setLastError(target-sensor);
    return throttle;
};

export default useDModule;