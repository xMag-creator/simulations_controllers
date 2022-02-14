import React from "react";
import PropTypes from "prop-types";

import MinMax from "./MinMax";
import P from "./P";

const ControllersPanel = ({ deltaTime, timeToggle, sensor, onSetActuator }) => {
    return (
        <div>
            {/*<MinMax toggle={timeToggle.toggle} sensor={sensor} setPower={onSetActuator}/>*/}
            <P toggle={timeToggle.toggle} sensor={sensor} setPower={onSetActuator}/>
        </div>
    );
};

ControllersPanel.propTypes = {
    deltaTime: PropTypes.number,
    toggle: PropTypes.bool.isRequired,
    sensor: PropTypes.number.isRequired,
    onSetActuator: PropTypes.func.isRequired,
};

export default ControllersPanel;