import './App.css';
import React, {useState, useEffect} from "react";

import ControlPanel from './js/components/ControlPanel';
import Visualization from "./js/components/Visualization";
import ChooseMode from "./js/components/ChooseMode";

import MinMax from "./js/components/controlers/MinMax";
import P from "./js/components/controlers/P";
import RoomTemperature from "./js/components/simulations/RoomTemperature";
import Tempomat from "./js/components/simulations/Tempomat";

function App() {
  const DELTA_TIME = 500;
  const CONTROLLERS = ['Min/Max', 'P'];
  const SIMULATIONS = ['Temperature', 'Tempomat'];

  const [time, setTime] = useState(0);
  const [runTime, setRunTime] = useState(false);
  const [actuator, setActuator] = useState(0);
  const [sensor, setSensor] = useState(0);
  const [simulationType, setSimulationType] = useState(SIMULATIONS);
  const [controllerType, setControllerType] = useState(CONTROLLERS);
  const [controller, setController] = useState(controllerType[0]);
  const [simulation, setSimulation] = useState(simulationType[0]);

  useEffect(() => {
      const timer = setInterval(() => {
              if(runTime === true){
                  setTime(prevState => prevState + DELTA_TIME);
              }
          }, DELTA_TIME);
      return () => {
          clearInterval(timer);
      }
  }, [runTime]);

  const TimeControl = () => {

    const handleStart = e => {
        e.preventDefault();
        setRunTime(true);
    }

    const handleStop = e => {
        e.preventDefault();
        setRunTime(false);
    }

    const handleReset = e => {
        e.preventDefault();
        setTime(0);
    }

    return (
        <>
            <form>
                <button onClick={handleStart}>Start Time</button>
                <button onClick={handleStop}>Stop Time</button>
                <button onClick={handleReset}>Reset Time</button>
            </form>
        </>
    )
  }

  const SetSensorValue = () => {
      const [temporaryValue, setTemporaryValue] = useState(0);

      const handleSetValue = e => {
          e.preventDefault();
          setSensor(temporaryValue);
      }

      return (
          <form>
              <input value={temporaryValue} onChange={event => setTemporaryValue(Number(event.target.value))}/>
              <button onClick={handleSetValue}>Set sensor value</button>
          </form>
      )
  }

  return (
      <>
          <TimeControl />
          <ChooseMode modeList={SIMULATIONS} mode={simulation} setMode={setSimulation} />
          <ChooseMode modeList={CONTROLLERS} mode={controller} setMode={setController} />
          <SetSensorValue />
          <ControlPanel>

              {
                  (() => {
                      switch (controller) {
                          case 'Min/Max': return <MinMax roomTemp={sensor} setFire={setActuator} />;
                          case 'P': return <P sensor={sensor} setPower={setActuator} />;
                          default: return null;
                      }
                  })()
              }
          </ControlPanel>
          <Visualization>
                <h1>Regulator: {controller}</h1>
                <h1>Simulation: {simulation}</h1>
                <h1>Time: {time} ms</h1>
                <h1>Actuator: {actuator} %</h1>

                {
                    (() => {
                        switch (simulation) {
                            case 'Temperature': return <RoomTemperature heater={actuator} Temp={sensor} setTemp={setSensor} deltaTime={DELTA_TIME} time={time}/>;
                            case 'Tempomat' : return <Tempomat stepOn={actuator} speed={sensor} setSpeed={setSensor} deltaTime={DELTA_TIME} time={time}/>;
                            default: return null;
                        }
                    })()
                }
          </Visualization>
      </>
  )
}

export default App;
