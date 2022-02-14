import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MinMax = ({ toggle, sensor, setPower }) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    useEffect(() => {
        if(sensor > max) {
            setPower(0);
        }
        if(sensor < min) {
            setPower(100);
        }
    }, [toggle]);

    return (
        <form>
            <input value={min} onChange={event => setMin(Number(event.target.value))}/>
            <input value={max} onChange={event => setMax(Number(event.target.value))}/>
        </form>
    );
};

MinMax.propTypes = {
    toggle: PropTypes.bool.isRequired,
    sensor: PropTypes.number.isRequired,
    setPower: PropTypes.func.isRequired,
};

export default MinMax;