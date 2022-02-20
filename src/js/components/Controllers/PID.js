import React, { useState, useEffect } from "react";
import ModulePanel from "./ModulePanel";
import PropTypes from "prop-types";
import usePModule from "../../hooks/usePModule";
import useIModule from "../../hooks/useIModule";
import useDModule from "../../hooks/useDModule";
import useNormalize from "../../hooks/useNormalize";

const PID = ({ toggle, sensor, setPower }) => {
    const [p, setP] = useState(0);
    const [i, setI] = useState(0);
    const [d, setD] = useState(0);
    const [enhancementP, setEnhancementP] = useState(1.0);
    const [enhancementI, setEnhancementI] = useState(1.0);
    const [enhancementD, setEnhancementD] = useState(1.0);
    const [lastError, setLastError] = useState(0);
    const [integralSum, setIntegralSum] = useState(0);
    const [target, setTarget] = useState(50);
    const [throttle, setThrottle] = useState(0);

    const PIDController = () => {
        setP(usePModule(target, sensor, enhancementP));
        setI(useIModule(target, sensor, integralSum, enhancementI, setIntegralSum));
        setD(useDModule(target, sensor, lastError, enhancementD, setLastError));
        setThrottle(useNormalize(p + i + d));
        setPower(throttle);
    };

    useEffect(() => {
        PIDController();
    }, [toggle]);

    return (
        <>
            <div className="Simulation Controllers Target">
                <h2>Target: </h2>
                <input value={target} onChange={event => setTarget(parseFloat(event.target.value))}/>
            </div>
            <ModulePanel name={"P"} value={p} enhancement={enhancementP} setEnhancement={setEnhancementP} />
            <ModulePanel name={"I"} value={i} enhancement={enhancementI} setEnhancement={setEnhancementI} />
            <ModulePanel name={"D"} value={d} enhancement={enhancementD} setEnhancement={setEnhancementD} />
            <h2 className="Simulation Controllers">Throttle: {throttle.toFixed(2)}</h2>
        </>
    );
};

PID.propTypes = {
    toggle: PropTypes.bool.isRequired,
    sensor: PropTypes.number.isRequired,
    setPower: PropTypes.func.isRequired,
};

export default PID;