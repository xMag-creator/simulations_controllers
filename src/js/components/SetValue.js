import React, {useState} from "react";

const SetValue = props => {
    const [value, setValue] = useState(0);

    const handleClick = e => {
        e.preventDefault();
        props.setValue(Number(value));
    }

    return (
        <form>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type='number' onClick={handleClick}>Set value</button>
        </form>
    )
}

export default SetValue;