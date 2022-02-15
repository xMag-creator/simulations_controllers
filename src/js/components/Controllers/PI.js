import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import pModule from "../../hooks/pModule";
import iModule from "../../hooks/iModule";
import normalize from "../../hooks/normalize";

const PI = ({ toggle, sensor, setPower }) => {
    const [p, setP] = useState(0);
    const [i, setI] = useState(0);
    const [enhancementP, setEnhancementP] = useState(1.0);
    const [enhancementI, setEnhancementI] = useState(1.0);
    const [integralSum, setIntegralSum] = useState(0);
    const [target, setTarget] = useState(50);
    const [throttle, setThrottle] = useState(0);

    useEffect(() => {
        setP(pModule(target, sensor, enhancementP));
        setI(iModule(target, sensor, integralSum, enhancementI, setIntegralSum));
        setThrottle(normalize(p + i));
        setPower(throttle);
    }, [toggle]);

    return (
        <>
            <form>
                <input value={target} onChange={event => setTarget(Number(event.target.value))}/>
                <input value={enhancementP} onChange={event => setEnhancementP(Number(event.target.value))}/>
                <input value={enhancementI} onChange={event => setEnhancementI(Number(event.target.value))}/>
            </form>
            <h2>P value: {p.toFixed(2)}</h2>
            <h2>I value: {i.toFixed(2)}</h2>
            <h2>Throttle: {throttle.toFixed(2)}</h2>
        </>
    );
};

PI.propTypes = {
    toggle: PropTypes.bool.isRequired,
    sensor: PropTypes.number.isRequired,
    setPower: PropTypes.func.isRequired,
};

export default PI;