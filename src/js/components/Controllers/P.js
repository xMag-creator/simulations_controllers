import React, { useEffect, useState } from "react";
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
            <form>
                <input value={target} onChange={event => setTarget(Number(event.target.value))}/>
                <input value={enhancement} onChange={event => setEnhancement(Number(event.target.value))}/>
            </form>
            <h2>Throttle: {throttle.toFixed(2)}</h2>
        </>
    );
};

P.propTypes = {
    toggle: PropTypes.bool.isRequired,
    sensor: PropTypes.number.isRequired,
    setPower: PropTypes.func.isRequired,
};

export default P;