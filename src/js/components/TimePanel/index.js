import React from "react";
import Clock from "./Clock";

const Index = ({ deltaTime, time, onStartTime, onStopTime }) => {
    return (
        <>
            <button disabled={time.working} onClick={onStartTime}>Start</button>
            <button disabled={!time.working} onClick={onStopTime}>Stop</button>
            <Clock deltaTime={deltaTime} toggle={time.toggle} />
        </>
    );
};

export default Index;