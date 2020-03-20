import React from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    // const [person, personNumber] = useState("");
    return (
        <div className="App">
            <h1 className="Header">React Wars</h1>
            <h2>To Display Everyone from the known reaches of the Galaxies!</h2>
            <Card />
        </div>
    );
};

export default App;
