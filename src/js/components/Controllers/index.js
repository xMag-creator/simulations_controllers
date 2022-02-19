import React from "react";
import PropTypes from "prop-types";

import MinMax from "./MinMax";
import P from "./P";
import PI from "./PI";
import PID from "./PID";

const ControllersPanel = ({ controller, timeToggle, sensor, onSetActuator }) => {
    return (
        <div className="Simulation Controllers">
            {
                (() => {
                    switch (controller) {
                        case 'Min/Max': return <MinMax toggle={timeToggle.toggle} sensor={sensor} setPower={onSetActuator}/>;
                        case 'P': return <P toggle={timeToggle.toggle} sensor={sensor} setPower={onSetActuator}/>;
                        case 'PI': return <PI toggle={timeToggle.toggle} sensor={sensor} setPower={onSetActuator}/>;
                        case 'PID': return <PID toggle={timeToggle.toggle} sensor={sensor} setPower={onSetActuator}/>;
                        default: return null;
                    }
                })()
            }
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