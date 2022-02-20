const useNormalize = (value) => {
    if (value > 100) {
        return 100;
    } if (value < 0) {
        return 0;
    } else {
        return value;
    }
};

export default useNormalize;