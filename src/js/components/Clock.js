import React, { useState, useEffect } from "react";

const Clock = ({ deltaTime, toggle }) => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        setTime(prevState => prevState + deltaTime);
    }, [toggle]);

    return (
        <>
            <h1>Simulation time: {time/1000} [s]</h1>
        </>
    );
};

export default Clock;