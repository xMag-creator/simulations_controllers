import { connect } from "react-redux";
import TimePanel from "../components/TimePanel";

import { deltaTime, startTime, stopTime } from "../redux/actions/timer";

const mapStateToProps = (state) => ({
    deltaTime: deltaTime,
    time: state.timeToggle,
})

const mapDispatchToProps = (dispatch) => ({
    onStartTime: () => dispatch(startTime()),
    onStopTime: () => dispatch(stopTime()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimePanel);