import React, { Component } from 'react';
import General from "./components/General";
import Education from "./components/Education"
import Practical from "./components/Practical"

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
        const jobExperience = {input, jobExp}

        return(
            <div className="container">
                <h1 className="title">Resume Builder</h1>
                <div className="general-info">
                    <General generalInfo = {generalInformation} />
                    <Education eduInfo = {educationInformation} />
                    <Practical pracInfo = {jobExperience} />
                </div>
            </div>
        );
    }
}

export default App;
