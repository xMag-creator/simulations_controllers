import React, { useState, useEffect } from "react";
import ModulePanel from "./ModulePanel";
import PropTypes from "prop-types";
import usePModule from "../../hooks/usePModule";
import useIModule from "../../hooks/useIModule";
import useNormalize from "../../hooks/useNormalize";

const PI = ({ toggle, sensor, setPower }) => {
    const [p, setP] = useState(0);
    const [i, setI] = useState(0);
    const [enhancementP, setEnhancementP] = useState(1.0);
    const [enhancementI, setEnhancementI] = useState(1.0);
    const [integralSum, setIntegralSum] = useState(0);
    const [target, setTarget] = useState(50);
    const [throttle, setThrottle] = useState(0);

    const PIController = () => {
        setP(usePModule(target, sensor, enhancementP));
        setI(useIModule(target, sensor, integralSum, enhancementI, setIntegralSum));
        setThrottle(useNormalize(p + i));
        setPower(throttle);
    };

    useEffect(() => {
        PIController();
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