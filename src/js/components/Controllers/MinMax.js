import React, {useState, useEffect} from "react";

const MinMax = (props) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if(props.roomTemp > max) {
        props.setFire(0);
    }
    if(props.roomTemp < min) {
        props.setFire(100);
    }
  }, [max, min, props.roomTemp])

  return (
      <form>
        <input value={min} onChange={event => setMin(event.target.value)}/>
        <input value={max} onChange={event => setMax(event.target.value)}/>
      </form>
  )
}

export default MinMax;