import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CookingWater = ({ deltaTime, toggle, heater, setTemp }) => {
    const TEMP_CONST = 0.0005; // per 1 [s]
    const COOLING_CONST = 0.0002;
    const [roomTemp, setRoomTemp] = useState(0);

    useEffect(() => {
        setRoomTemp(((roomTemp + ((heater / 100) * (TEMP_CONST / (deltaTime / 1000))) - COOLING_CONST)));
        setTemp(roomTemp);
    }, [toggle]);

    return (
        <>
            <h1>Garnek temperature: {roomTemp.toFixed(2)} &deg;C</h1>
        </>
    );
};

CookingWater.propTypes = {
    deltaTime: PropTypes.number.isRequired,
    toggle: PropTypes.bool.isRequired,
    heater: PropTypes.number.isRequired,
    setTemp: PropTypes.func.isRequired,
};

export default CookingWater;