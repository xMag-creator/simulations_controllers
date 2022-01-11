import './App.css';
import React, {useState, useEffect} from "react";

import ControlPanel from './js/components/ControlPanel';
import Visualization from "./js/components/Visualization";
import ChooseMode from "./js/components/ChooseMode";

import MinMax from "./js/components/controlers/MinMax";
import RoomTemperature from "./js/components/simulations/RoomTemperature";

function App() {
  const DELTA_TIME = 250;
  const CONTROLLERS = ['Min/Max', 'P'];
  const SIMULATIONS = ['Temperature', 'Tempomat'];

  const [time, setTime] = useState(0);
  const [actuator, setActuator] = useState(0);
  const [sensor, setSensor] = useState(0);
  const [simulationType, setSimulationType] = useState(SIMULATIONS);
  const [controllerType, setControllerType] = useState(CONTROLLERS);
  const [controller, setController] = useState('');
  const [simulation, setSimulation] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevState => prevState + DELTA_TIME);
    }, DELTA_TIME);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
      <>
          <ChooseMode modeList={SIMULATIONS} setMode={setSimulation} />
          <ChooseMode modeList={CONTROLLERS} setMode={setController} />
          <ControlPanel>
              <MinMax roomTemp={sensor} setFire={setActuator}/>
          </ControlPanel>
          <Visualization>
            <h1>Regulator: {controllerType[0]}</h1>
            <h1>Simulation: {simulationType[0]}</h1>
            <h1>Time: {time/4}s</h1>
            <h1>Actuator: {actuator} %</h1>
            <h1>Sensor: {sensor} &deg;C</h1>

              <RoomTemperature heater={actuator} setTemp={setSensor} deltaTime={DELTA_TIME} time={time}/>
          </Visualization>
      </>
  )
}

export default App;
