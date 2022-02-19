import React from "react";
import Clock from "./Clock";

const Index = ({ deltaTime, time, onStartTime, onStopTime }) => {
    return (
        <>
            <div className="Simulation Time Buttons">
                <button className="Simulation Time" disabled={time.working} onClick={onStartTime}>Start</button>
                <button className="Simulation Time" disabled={!time.working} onClick={onStopTime}>Stop</button>
            </div>
            <Clock deltaTime={deltaTime} toggle={time.toggle} />
        </>
    );
};

export default Index;