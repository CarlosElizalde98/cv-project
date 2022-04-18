import React from "react";

const Practical = (props) => {

    const { pracInfo } = props;

    return (
        <form className="general" id="practical">
            <h2>Enter your Practical Experience Here</h2>
            <label htmlFor="company name">Enter your Company Name Here</label>
            <input type="text" id="company-name" placeholder="Company Name" />
            <label htmlFor="position">Enter your Position Title here</label>
            <input type="text" id="position" placeholder="Position Title" />
            <label htmlFor="tasks">Enter the main tasks of your job here</label>
            <textarea id="tasks" name="tasks" rows="6" cols="40" placeholder="Tell us here..." />
            <label htmlFor="date-range">Tell us the Year From and Until you worked at this company</label>
            <input type="text" id="work-dates" placeholder="Year From to Year To" />
            <button type="submit" className="submit" onClick={pracInfo}>Submit</button>
        </form>
    )
}

export default Practical;