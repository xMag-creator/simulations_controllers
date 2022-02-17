import React from "react";
import PropTypes from "prop-types";

import RoomTemperature from "./RoomTemperature";
import Tempomat from "./Tempomat";
import CookingWater from "./CookingWater";

const EnvironmentsPanel = ({ environment, deltaTime, timeToggle, actuator, onSetSensor }) => {
    return (
        <div>
            {
                (() => {
                    switch (environment) {
                        case 'Room Temperature': return <RoomTemperature deltaTime={deltaTime} toggle={timeToggle.toggle} heater={actuator} setTemp={onSetSensor} />;
                        case 'Tempomat': return <Tempomat deltaTime={deltaTime} toggle={timeToggle.toggle} throttle={actuator} setSpeed={onSetSensor} />;
                        case 'Cooking Water': return <CookingWater deltaTime={deltaTime} toggle={timeToggle.toggle} heater={actuator} setTemp={onSetSensor} />;
                        default: return null;
                    }
                })()
            }
        </div>
    );
};

EnvironmentsPanel.propTypes = {
    deltaTime: PropTypes.number.isRequired,
    timeToggle: PropTypes.object.isRequired,
    actuator: PropTypes.number.isRequired,
    onSetSensor: PropTypes.func.isRequired,
};

export default EnvironmentsPanel;