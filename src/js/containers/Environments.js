import { connect } from "react-redux";
import environments from "../components/Environments";

import { deltaTime } from "../redux/actions/time";
import { setSensor } from "../redux/actions/simulation";

const mapStateToProps = (state) => ({
    deltaTime: deltaTime,
    timeToggle: state.timeToggle,
    actuator: state.simulation.actuator,
});

const mapDispatchToProps = (dispatch) => ({
    onSetSensor: (payload) => dispatch(setSensor(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(environments);