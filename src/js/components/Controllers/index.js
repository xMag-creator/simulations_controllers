import React from "react";
import PropTypes from "prop-types";

import MinMax from "./MinMax";
import P from "./P";
import PI from "./PI";
import PID from "./PID";

const ControllersPanel = ({ deltaTime, timeToggle, sensor, onSetActuator }) => {
    return (
        <div>
            {/*<MinMax toggle={timeToggle.toggle} sensor={sensor} setPower={onSetActuator}/>*/}
            {/*<P toggle={timeToggle.toggle} sensor={sensor} setPower={onSetActuator}/>*/}
            {/*<PI toggle={timeToggle.toggle} sensor={sensor} setPower={onSetActuator}/>*/}
            <PID toggle={timeToggle.toggle} sensor={sensor} setPower={onSetActuator}/>
        </div>
    );
};

ControllersPanel.propTypes = {
    deltaTime: PropTypes.number,
    timeToggle: PropTypes.object.isRequired,
    sensor: PropTypes.number.isRequired,
    onSetActuator: PropTypes.func.isRequired,
};

export default ControllersPanel;