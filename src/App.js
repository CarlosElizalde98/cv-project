import React, { useEffect, useState } from 'react';
import General from "./components/General";
import Education from "./components/Education"
import Practical from "./components/Practical"
import RenderOutput from './components/RenderOutput';

import './App.css';

const App = () => {
    const [isGenSubmit, setGenSubmit] = useState(true);
    const [isEduSubmit, setEduSubmit] = useState(true);
    const [isJobSubmit, setJobSubmit] = useState(true);

    const [genInfo, setGenInfo] = useState({Name: '', Email:'', Phone: ''})
    const [education, setEdu] = useState({School: '', Degree:'', To:''})
    const [jobExp, setJob] = useState({Company:'', Position:'', Tasks:'', Dates:''})

    const handleChange = (items, name, value) => {
    
        if (items === 'generalInfo'){
            setGenInfo({...genInfo, [name]: value},
                
            )
        }
        else if (items === 'education'){
            setEdu({...education, [name]: value},
            )
        }
        else if (items === 'jobExp'){
            setJob({...jobExp, [name]: value}
            )
        }
        else {
            return null;
        }
        
    }

    const onGeneralSubmit = (e) => {
        e.preventDefault()
            let obj =  { Name: document.getElementById('firstName').value
                + ' ' + document.getElementById('lastName').value,
                Email: document.getElementById('email').value,
                Phone: document.getElementById('phone').value,
            }
       
            
            setGenSubmit( isGenSubmit => (
                !isGenSubmit
            ))

            setGenInfo(obj)
    }

    const onEduSubmit = (e) => {
        e.preventDefault()
        let obj = {
            School: document.getElementById('school-name').value,
            Degree: document.getElementById('study').value,
            To: document.getElementById('date-range').value,
        }
    
        
        setEduSubmit( isEduSubmit => (
            !isEduSubmit
        ))

        setEdu(obj)
    }

        const onJobsSubmit = (e) => {
        e.preventDefault()
        let obj = {
            Company: document.getElementById('company-name').value,
            Position: document.getElementById('position').value,
            Tasks: document.getElementById('tasks').value,
            Dates: document.getElementById('work-dates').value,
        }
    
        setJobSubmit( isJobSubmit => (!isJobSubmit
        ))

        setJob(obj)

    }

   
    return(
            <div className="container">
                <h1 className="title">Resume Builder</h1>
                <div className="general-info">
                    {isGenSubmit ? 
                    <General generalInfo = {onGeneralSubmit} /> : <RenderOutput items = {genInfo} handleChange = {handleChange} name="generalInfo"/>}
                    {isEduSubmit ? 
                    <Education eduInfo = {onEduSubmit} /> : <RenderOutput items = {education} handleChange = {handleChange} name="education"/>}
                    {isJobSubmit ? 
                    <Practical pracInfo = {onJobsSubmit} /> : <RenderOutput items = {jobExp} handleChange = {handleChange} name="jobExp"/>}
                </div>
            </div>
        );
    }

export default App;
