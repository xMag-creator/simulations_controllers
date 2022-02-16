import React from "react";

// import containers
import Controllers from "../containers/Controllers";
import Environments from "../containers/Environments";
import TimePanel from "../containers/TimePanel";

const Simulation = () => {
    return (
        <>
            <TimePanel />
            <Controllers />
            <Environments />
        </>
    );
};

export default Simulation;