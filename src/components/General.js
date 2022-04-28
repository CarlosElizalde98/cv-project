
import React from 'react';

const General = ({generalInfo}) => {


return (
    <form className="general" id="general">
         <h2>Enter your general information here</h2>
        <label htmlFor="firstName">First Name</label>
        <input  type="text" id="firstName" placeholder='First Name'/>
        <label htmlFor="lastName">Last Name</label>
        <input  type="text" id="lastName" placeholder='Last Name'/>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder='Email Address'/>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" id="phone" placeholder='Phone Number'/>
        <button type="submit" onClick={generalInfo} className="submit" id="general-submit">Submit Info</button>
    </form>

);
}
export default General;