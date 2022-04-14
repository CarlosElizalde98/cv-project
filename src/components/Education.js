import React from 'react'

const Education = (props) => {

    return (
        <form className="general">
            <h2>Add your Education Experience here</h2>
            <label htmlFor='University'>University or School Name</label>
            <input type="text" id="school-name" placeholder="Add University or School" />
            <label htmlFor="Degree">Enter your Field of Study</label>
            <input type="text" id="study" placeholder='Add Degree Here' />
            <label htmlFor="Date">Enter the Date Range for your Degree here</label>
            <input type="text" id="date-range" placeholder="Enter Year From to Year To Degree Completion" />
            <button type="submit" className="submit">Submit</button>
        </form>
    );
}

export default Education;