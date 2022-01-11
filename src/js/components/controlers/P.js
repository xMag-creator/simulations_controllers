import React, {useEffect} from "react";

const P = props => {
    const WZMOCNIENIE = 2;
    const zadanaPrędkość = 60;
    useEffect(() => {
        const result = (zadanaPrędkość- props.speed) * WZMOCNIENIE;
        if (result > 100) {
            props.setPower(100);
            return;
        }
        props.setPower(result)
    }, []);
  return null
}

export default P;