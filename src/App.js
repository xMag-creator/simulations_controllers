import React from "react";
import { Provider } from "react-redux";

//import store
import store from "./js/redux/store";

// import containers
import Controllers from "./js/containers/Controllers";
import Environments from "./js/containers/Environments";
import TimePanel from "./js/containers/TimePanel";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <TimePanel />
                <Controllers />
                <Environments />
            </Provider>
        </>
    )
};

export default App;