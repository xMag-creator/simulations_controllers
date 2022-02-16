import React from "react";
import PropTypes from "prop-types";

import RoomTemperature from "./RoomTemperature";
import Tempomat from "./Tempomat";
import CookingWater from "./CookingWater";

const EnvironmentsPanel = ({ deltaTime, timeToggle, actuator, onSetSensor }) => {
    return (
        <div>
            {/*<RoomTemperature deltaTime={deltaTime} toggle={timeToggle.toggle} heater={actuator} setTemp={onSetSensor} />*/}
            <Tempomat deltaTime={deltaTime} toggle={timeToggle.toggle} throttle={actuator} setSpeed={onSetSensor} />
            {/*<CookingWater deltaTime={deltaTime} toggle={timeToggle.toggle} heater={actuator} setTemp={onSetSensor} />*/}
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