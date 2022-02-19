import React, { useEffect, useState } from "react";
import ModulePanel from "./ModulePanel";
import pModule from "../../hooks/pModule";
import normalize from "../../hooks/normalize";
import PropTypes from "prop-types";

const P = ({ toggle, sensor, setPower}) => {
    const [enhancement, setEnhancement] = useState(1);
    const [target, setTarget] = useState(50);
    const [throttle, setThrottle] = useState(0);

    useEffect(() => {
        setThrottle(normalize(pModule(target, sensor, enhancement)));
        setPower(throttle);
    }, [toggle]);

    return (
        <>
            <div className="Simulation Controllers Target">
                <h2>Target: </h2>
                <input type={"number"} value={target} onChange={event => setTarget(parseFloat(event.target.value))}/>
            </div>
            <ModulePanel name={"P"} value={throttle} enhancement={enhancement} setEnhancement={setEnhancement} />
            <h2 className="Simulation Controllers">Throttle: {throttle.toFixed(2)}</h2>
        </>
    );
};

P.propTypes = {
    toggle: PropTypes.bool.isRequired,
    sensor: PropTypes.number.isRequired,
    setPower: PropTypes.func.isRequired,
};

export default P;