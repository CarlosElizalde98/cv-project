import React, { Component } from 'react';
import General from "./components/General";
import Education from "./components/Education"
import Practical from "./components/Practical"
import RenderOutput from './components/RenderOutput';

import './App.css';
class App extends Component{
    constructor(){
        super();

        this.state = {
            input: {
                text: ''
            },

            isGenSubmitted: true,
            isEduSubmitted: true,
            isJobSubmitted: true,

            generalInfo: [],
            education: [],
            jobExp: [],
        }

        this.onGeneralSubmit = this.onGeneralSubmit.bind(this)
        this.onEduSubmit = this.onEduSubmit.bind(this)
        this.onJobsSubmit = this.onJobsSubmit.bind(this)

    }

    onGeneralSubmit = (e) => {
        e.preventDefault()
            let obj =  { Name: document.getElementById('firstName').value
                + ' ' + document.getElementById('lastName').value,
                Email: document.getElementById('email').value,
                Phone: document.getElementById('phone').value,
            }
            let gen = Object.keys(obj).map((key) => [`${key}:  ${obj[key]}`])
             console.log(gen)
            this.setState( prevState => ({
                isGenSubmitted: !prevState.isGenSubmitted,
            }))
            this.setState({
                generalInfo: this.state.generalInfo.concat(gen),
            })
            console.log(e)
        
    }

    onEduSubmit = (e) => {
        e.preventDefault()
        let obj = [{
            School: document.getElementById('school-name').value,
            Degree: document.getElementById('study').value,
            To: document.getElementById('date-range').value,
        }]
        let edu = []
        Object.entries(obj).forEach(([key, value])=> {
            edu.push(`${key}: ${value}`)
        })
        this.setState( prevState => ({
            education: this.state.education.concat(edu),
            isEduSubmitted: !prevState.isEduSubmitted,
        }))
    }

    onJobsSubmit = (e) => {
        e.preventDefault()
        let obj = [{
            Company: document.getElementById('company-name').value,
            Position: document.getElementById('position').value,
            Tasks: document.getElementById('tasks').value,
            Dates: document.getElementById('work-dates').value,
        }]
        let jobs = []
        Object.entries(obj).forEach(([key, value])=> {
            jobs.push(`${key}: ${value}`)
        })
        this.setState( prevState => ({
            jobExp: this.state.jobExp.concat(jobs),
            isJobSubmitted: !prevState.isJobSubmitted,
        }))
    }

    render(){


        return(
            <div className="container">
                <h1 className="title">Resume Builder</h1>
                <div className="general-info">
                    {this.state.isGenSubmitted ? 
                    <General generalInfo = {this.onGeneralSubmit} /> : <RenderOutput items = {this.state.generalInfo} />}
                    {this.state.isEduSubmitted ? 
                    <Education eduInfo = {this.onEduSubmit} /> : <RenderOutput items = {this.state.education} />}
                    {this.state.isJobSubmitted ? 
                    <Practical pracInfo = {this.onJobsSubmit} /> : <RenderOutput items = {this.state.jobExp} />}
                </div>
            </div>
        );
    }
}

export default App;
