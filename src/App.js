import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import store
import store from "./js/redux/store";

import Simulation from "./js/components/Simulation";
import Menu from "./js/components/Menu";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Menu />} />
                        <Route path="/simulation" element={<Simulation />} />
                    </Routes>
                </Router>
            </Provider>
        </>
    )
};

export default App;