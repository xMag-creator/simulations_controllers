import React, {useEffect} from "react";

const RoomTemperature = props => {
  const TEMP_CONST = 0.05; // per 1 [s]
  const COOLING_CONST = 0.02;

  useEffect(() => {
    props.setTemp(prevState => ((prevState + ((props.heater / 100) * (TEMP_CONST / (props.deltaTime / 1000))) - COOLING_CONST)));
  }, [props.time]);

  return <h1>Sensor: {props.Temp.toFixed(2)} &deg;C</h1>;
}

export default RoomTemperature;