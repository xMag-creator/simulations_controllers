import React from "react";

const ModulePanel = ({name, value, enhancement, setEnhancement}) => {
    return (
        <>
            <input type={"number"} value={enhancement} onChange={event => setEnhancement(parseFloat(event.target.value))}/>
            <h2>{name} value is: {value.toFixed(2)}</h2>
        </>
    )
};

export default ModulePanel;