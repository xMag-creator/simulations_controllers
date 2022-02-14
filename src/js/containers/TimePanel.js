import { connect } from "react-redux";
import TimePanel from "../components/TimePanel";

import { startTime, stopTime } from "../redux/actions/timer";

const mapStateToProps = (state) => ({
    timeWorking: state.timeToggle.working,
})

const mapDispatchToProps = (dispatch) => ({
    onStartTime: () => dispatch(startTime()),
    onStopTime: () => dispatch(stopTime()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimePanel);