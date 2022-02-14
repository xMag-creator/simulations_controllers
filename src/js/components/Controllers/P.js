import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const P = ({ toggle, sensor, setPower}) => {
    const [enhancement, setEnhancement] = useState(1);
    const [target, setTarget] = useState(50);

    useEffect(() => {
        const result = (target - sensor) * enhancement;
        if (result > 100) {
            setPower(100);
        } if (result < 0) {
            setPower(0);
        } else {
            setPower(result);
        }
    }, [toggle]);

    return (
        <form>
            <input value={target} onChange={event => setTarget(Number(event.target.value))}/>
            <input value={enhancement} onChange={event => setEnhancement(Number(event.target.value))}/>
        </form>
    );
};

P.propTypes = {
    toggle: PropTypes.bool.isRequired,
    sensor: PropTypes.number.isRequired,
    setPower: PropTypes.func.isRequired,
};

export default P;