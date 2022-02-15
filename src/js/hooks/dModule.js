const dModule = (current, last, enhancement) => {
    return (current - last) * enhancement;
};

export default dModule;