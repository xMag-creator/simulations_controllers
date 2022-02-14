import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Tempomat = ({ deltaTime, toggle, stepOn, setSpeed }) => {
    const ACC_CONST = 2; // per 1 sek
    const DECE_CONST = 1;
    const [vehicleSpeed, setVehicleSpeed] = useState(0);

    useEffect(() => {
        setVehicleSpeed((vehicleSpeed + ((stepOn / 100) * (ACC_CONST / (deltaTime / 1000))) - DECE_CONST));
        setSpeed(vehicleSpeed);
    }, [toggle]);

    return <h1>Sensor: {vehicleSpeed.toFixed(2)} km/h</h1>;
};

Tempomat.propTypes = {
    deltaTime: PropTypes.number.isRequired,
    toggle: PropTypes.bool.isRequired,
    stepOn: PropTypes.number.isRequired,
    setSpeed: PropTypes.func.isRequired,
};

export default Tempomat;