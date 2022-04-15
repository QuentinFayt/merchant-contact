import React from "react";
import ReactDOM from "react-dom";
import Customers from "./components/Customers";

const App = () => (
    <div>
        <Customers/>
    </div>
);

ReactDOM.render(<App/>,document.getElementById("root"));