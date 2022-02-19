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
        <>
            <div className="Simulation Controllers Target">
                <h2>Min: </h2>
                <input type={"number"} value={min} onChange={event => setMin(parseFloat(event.target.value))}/>
            </div>
            <div className="Simulation Controllers Target">
                <h2>Max: </h2>
                <input type={"number"} value={max} onChange={event => setMax(parseFloat(event.target.value))}/>
            </div>
        </>
    );
};

MinMax.propTypes = {
    toggle: PropTypes.bool.isRequired,
    sensor: PropTypes.number.isRequired,
    setPower: PropTypes.func.isRequired,
};

export default MinMax;