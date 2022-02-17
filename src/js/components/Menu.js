import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import controllersList from "../controllersList";
import environmentsList from "../environmentsList";

const Menu = ({ onSetController, onSetEnvironment }) => {
    const [controller, setController] = useState('');
    const [environment, setEnvironment] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (controller === 'None' || environment === 'None') {
            setError(true);
            return ;
        }
        onSetController(controller);
        onSetEnvironment(environment);
        navigate('/simulation');
    }

    return (
        <>
            <h1>Simulation configuration:</h1>
            <select value={controller} onChange={event => setController(event.target.value)}>
                {controllersList.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>;
                })}
            </select>
            <select value={environment} onChange={event => setEnvironment(event.target.value)}>
                {environmentsList.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>;
                })}
            </select>
            <button onClick={handleClick}>Launch</button>

            {error && <p>Choose controller and environment!</p>}
        </>
    )
}

export default Menu;