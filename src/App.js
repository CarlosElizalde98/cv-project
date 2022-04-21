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

            
            generalInfo: [
                {
                Name: '',
                Email: '',
                Phone: '',
            }
            ],
          
            education: [
                {
                    School: '',
                    Degree: '',
                    To: '',
                }
            ],
           
            jobExp: [
                {
                    Company: '',
                    Position: '',
                    Tasks: '',
                    Dates: '',
                }
            ],

            
     
        }

        this.onGeneralSubmit = this.onGeneralSubmit.bind(this)
        this.onEduSubmit = this.onEduSubmit.bind(this)
        this.onJobsSubmit = this.onJobsSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    

    }

    handleChange = (items, name, value) => {
    
        if (items === 'generalInfo'){
            this.setState( prevState => ({
                generalInfo: {...prevState.generalInfo, [name]: value},
                
            }))
        }
        else if (items === 'education'){
            this.setState( prevState => ({
                education: {...prevState.education, [name]: value},
            }))
        }
        else if (items === 'jobExp'){
            this.setState( prevState => ({
                jobExp: {...prevState.jobExp, [name]: value}
            }))
        }
        else {
            return null;
        }
        
    }
    onGeneralSubmit = (e) => {
        e.preventDefault()
            let obj =  { Name: document.getElementById('firstName').value
                + ' ' + document.getElementById('lastName').value,
                Email: document.getElementById('email').value,
                Phone: document.getElementById('phone').value,
            }
       
            
            this.setState( prevState => ({
                isGenSubmitted: !prevState.isGenSubmitted,
           
                generalInfo: obj,
            }))
    }

 

    onEduSubmit = (e) => {
        e.preventDefault()
        let obj = {
            School: document.getElementById('school-name').value,
            Degree: document.getElementById('study').value,
            To: document.getElementById('date-range').value,
        }
    
        
        this.setState( prevState => ({
         
            education: obj,
            isEduSubmitted: !prevState.isEduSubmitted,
        }))
    }

    onJobsSubmit = (e) => {
        e.preventDefault()
        let obj = {
            Company: document.getElementById('company-name').value,
            Position: document.getElementById('position').value,
            Tasks: document.getElementById('tasks').value,
            Dates: document.getElementById('work-dates').value,
        }
    
        this.setState( prevState => ({
           
            jobExp: obj,
            isJobSubmitted: !prevState.isJobSubmitted,
        }))
    }

    render(){

     
        return(
            <div className="container">
                <h1 className="title">Resume Builder</h1>
                <div className="general-info">
                    {this.state.isGenSubmitted ? 
                    <General generalInfo = {this.onGeneralSubmit} /> : <RenderOutput items = {this.state.generalInfo} handleChange = {this.handleChange} name="generalInfo"/>}
                    {this.state.isEduSubmitted ? 
                    <Education eduInfo = {this.onEduSubmit} /> : <RenderOutput items = {this.state.education} handleChange = {this.handleChange} name="education"/>}
                    {this.state.isJobSubmitted ? 
                    <Practical pracInfo = {this.onJobsSubmit} /> : <RenderOutput items = {this.state.jobExp} handleChange = {this.handleChange} name="jobExp"/>}
                </div>
            </div>
        );
    }
}

export default App;
