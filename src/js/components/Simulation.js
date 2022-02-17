import React from "react";

// import containers
import Controllers from "../containers/Controllers";
import Environments from "../containers/Environments";
import TimePanel from "../containers/TimePanel";

const Simulation = ({ controller, environment }) => {
    return (
        <>
            <TimePanel />
            <Controllers controller={controller} />
            <Environments environment={environment} />
        </>
    );
};

export default Simulation;