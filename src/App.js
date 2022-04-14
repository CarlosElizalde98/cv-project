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

        this.onGeneralSubmit = this.onGeneralSubmit.bind(this)
        this.onEduSubmit = this.onEduSubmit.bind(this)
        this.onJobsSubmit = this.onJobsSubmit.bind(this)

    }

    onGeneralSubmit = (e) => {
        e.preventDefault()
            let obj = [{
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
            }
            ]
            this.setState({
                generalInfo: this.state.generalInfo.concat(obj)
            })
            console.log(this.state.generalInfo)
        
    }

    onEduSubmit = (e) => {
        e.preventDefault()
        let obj = [{
            schoolName: document.getElementById('school-name').value,
            study: document.getElementById('study').value,
            dateRange: document.getElementById('date-range').value,
        }]
        this.setState({
            education: this.state.education.concat(obj)
        })
    }

    onJobsSubmit = (e) => {
        e.preventDefault()
        let obj = [{
            company: document.getElementById('company-name').value,
            position: document.getElementById('position').value,
            tasks: document.getElementById('tasks').value,
            workRange: document.getElementById('work-dates').value,
        }]
        this.setState({
            jobExp: this.state.jobExp.concat(obj)
        })
    }

    render(){


        return(
            <div className="container">
                <h1 className="title">Resume Builder</h1>
                <div className="general-info">
                    <General generalInfo = {this.onGeneralSubmit} />
                    <Education eduInfo = {this.onEduSubmit} />
                    <Practical pracInfo = {this.onJobsSubmit} />
                </div>
            </div>
        );
    }
}

export default App;
