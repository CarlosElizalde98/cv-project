
import React from 'react';

const General = (props) => {


return (
    <form className="general">
         <h2>Enter your general information here</h2>
        <label htmlFor="firstName">First Name</label>
        <input  type="text" id="firstName" placeholder='first name'/>
        <label htmlFor="lastName">Last Name</label>
        <input  type="text" id="lastName" placeholder='Last Name'/>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder='Email Address'/>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" id="phone" placeholder='Phone Number'/>
        <button type="submit" className="submit">Submit Info</button>
    </form>

);
}
export default General;