import React from "react";

// import containers
import Controllers from "../containers/Controllers";
import Environments from "../containers/Environments";
import TimePanel from "../containers/TimePanel";

const Simulation = ({ controller, environment }) => {
    return (
        <div className="Simulation">
            <TimePanel />
            <Controllers controller={controller} />
            <Environments environment={environment} />
        </div>
    );
};

export default Simulation;