import { connect } from "react-redux";
import Clock from "../components/Clock";

import { deltaTime } from "../redux/actions/timer";

const mapStateToProps = (state) => ({
    deltaTime: deltaTime,
    toggle: state.timeToggle.toggle,
});

export default connect(mapStateToProps)(Clock);