import { connect } from "react-redux";
import controllers from "../components/Controllers";

import { setActuator } from "../redux/actions/simulation";

const mapStateToProps = (state) => ({
    timeToggle: state.timeToggle,
    sensor: state.simulation.sensor,
});

const mapDispatchToProps = (dispatch) => ({
    onSetActuator: (payload) => dispatch(setActuator(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(controllers);