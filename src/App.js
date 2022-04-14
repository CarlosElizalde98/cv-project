import React, { Component } from 'react';
import General from "./components/General";
import Education from "./components/Education"

import './App.css';
class App extends Component{
    constructor(){
        super();

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
        const educationInformation = {input, education}

        return(
            <div className="container">
                <h1 className="title">Resume Builder</h1>
                <div className="general-info">
                    <General generalInfo = {generalInformation} />
                    <Education eduInfo = {educationInformation} />
                </div>
            </div>
        );
    }
}

export default App;
