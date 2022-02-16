import React from "react";

const TimePanel = ({ timeWorking, onStartTime, onStopTime }) => {

    return (
        <>
            <button disabled={timeWorking} onClick={onStartTime}>Start</button>
            <button disabled={!timeWorking} onClick={onStopTime}>Stop</button>
        </>
    );
};

export default TimePanel;