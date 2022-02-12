import React, {useEffect, useState} from "react";

const P = props => {
    const [enhancement, setEnhancement] = useState(1);
    const [target, setTarget] = useState(50);

    useEffect(() => {
        const result = (target - props.sensor) * enhancement;
        if (result > 100) {
            props.setPower(100);
        } if (result < 0) {
            props.setPower(0);
        } else {
            props.setPower(result);
        }
    }, [enhancement, target, props.sensor]);

  return (
      <form>
          <input value={target} onChange={event => setTarget(Number(event.target.value))}/>
          <input value={enhancement} onChange={event => setEnhancement(Number(event.target.value))}/>
      </form>
  )
}

export default P;