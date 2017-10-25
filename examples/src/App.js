import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { trans } from "rla-intl.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">
                        {trans("Welcome to {app}", {
                            app: "RLA Internationalisation"
                        })}
                    </h1>
                </header>
                <p className="App-intro">Put examples here...</p>
            </div>
        );
    }
}

export default App;
