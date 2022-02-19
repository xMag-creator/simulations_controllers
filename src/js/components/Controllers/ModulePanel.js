import React from "react";

const ModulePanel = ({name, value, enhancement, setEnhancement}) => {
    return (
        <div className="Simulation Controllers Module">
            <h2>{name}: </h2>
            <input type={"number"} value={enhancement} onChange={event => setEnhancement(parseFloat(event.target.value))}/>
            <h2> value: {value.toFixed(2)}</h2>
        </div>
    )
};

export default ModulePanel;