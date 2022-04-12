import React, { Component } from 'react';
import General from "./components/General";

import './App.css';
class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            input: {
                text: ''
            },
            generalInfo: [],
            education: [],
            jobExp: [],
        }
    }


    render(){

        const { input, generalInfo, education, jobExp} = this.state

        const generalInformation = {input, generalInfo}

        return(
            <div className="container">
                <h1 className="title">Resume Builder</h1>
                <div className="general-info">
                    <h2>Enter your general information here</h2>
                    <General generalInfo = {generalInformation} />
                </div>
            </div>
        );
    }
}

export default App;
