const useIModule = (target, sensor, integralSum, enhancement, setIntegralSum) => {
    setIntegralSum(prevState => prevState + (target - sensor));
    return (integralSum / 100) * enhancement;
};

export default useIModule;