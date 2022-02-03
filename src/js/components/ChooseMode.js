import React from "react";

const ChooseMode = props => {
  const handleChange = e => {
    props.setMode(e.target.value);
  }

  return <form>
    <select value={props.mode} onChange={handleChange}>
      {props.modeList.map(mode => {
        return <option value={mode}>{mode}</option>
      })}
    </select>
  </form>
}

export default ChooseMode;