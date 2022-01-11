import React, {useEffect} from "react";

const Tempomat = (props) => {
  const ACC_CONST = 0.05; // per 1 sek
  const DECE_CONST = 0.02;

  useEffect(() => {
    props.setTemp(prevState => ((prevState + ((props.heater / 100) * (ACC_CONST / (props.deltaTime / 1000))) - DECE_CONST)));
  }, [props.time])

  return null
}

export default Tempomat;