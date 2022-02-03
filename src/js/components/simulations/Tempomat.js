import React, {useEffect} from "react";

const Tempomat = (props) => {
  const ACC_CONST = 2; // per 1 sek
  const DECE_CONST = 1;

  useEffect(() => {
    props.setSpeed(prevState => ((prevState + ((props.stepOn / 100) * (ACC_CONST / (props.deltaTime / 1000))) - DECE_CONST)));
  }, [props.time]);

  return <h1>Sensor: {props.speed.toFixed(2)} km/h</h1>;
}

export default Tempomat;