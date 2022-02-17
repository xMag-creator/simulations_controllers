import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import store
import store from "./js/redux/store";

import Simulation from "./js/components/Simulation";
import Menu from "./js/components/Menu";

const App = () => {
    const [controller, setController] = useState('None');
    const [environment, setEnvironment] = useState('None');

    return (
        <>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Menu onSetController={setController} onSetEnvironment={setEnvironment} />} />
                        <Route path="/simulation" element={<Simulation controller={controller} environment={environment} />} />
                    </Routes>
                </Router>
            </Provider>
        </>
    );
};

export default App;