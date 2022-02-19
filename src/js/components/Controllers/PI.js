import React, { useState, useEffect } from "react";
import ModulePanel from "./ModulePanel";
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
            <div className="Simulation Controllers Target">
                <h2>Target: </h2>
                <input value={target} onChange={event => setTarget(parseFloat(event.target.value))}/>
            </div>
            <ModulePanel name={"P"} value={p} enhancement={enhancementP} setEnhancement={setEnhancementP} />
            <ModulePanel name={"I"} value={i} enhancement={enhancementI} setEnhancement={setEnhancementI} />
            <h2 className="Simulation Controllers">Throttle: {throttle.toFixed(2)}</h2>
        </>
    );
};

PI.propTypes = {
    toggle: PropTypes.bool.isRequired,
    sensor: PropTypes.number.isRequired,
    setPower: PropTypes.func.isRequired,
};

export default PI;