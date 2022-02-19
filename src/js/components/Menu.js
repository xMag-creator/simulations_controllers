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
        if (controller === '' || environment === '') {
            setError(true);
            return ;
        }
        onSetController(controller);
        onSetEnvironment(environment);
        navigate('/simulation');
    }

    return (
        <div className="Menu">
            <h1 className="Menu">Simulation configuration:</h1>
            <div className="Menu Form">
                <select className="Menu Form" value={controller} onChange={event => setController(event.target.value)}>
                    {controllersList.map((item, index) => {
                        return <option className="Menu Form" key={index} value={item}>{item}</option>;
                    })}
                </select>
                <select className="Menu Form" value={environment} onChange={event => setEnvironment(event.target.value)}>
                    {environmentsList.map((item, index) => {
                        return <option key={index} value={item}>{item}</option>;
                    })}
                </select>
                <button className="Menu Form" onClick={handleClick}>Launch</button>
            </div>

            {error && <p className="Menu Error">Choose controller and environment!</p>}
        </div>
    )
}

export default Menu;