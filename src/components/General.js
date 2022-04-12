
import React from 'react';

const General = (props) => {


return (
    <form className="general">
        <label htmlFor="firstName">First Name</label>
        <input  type="text" id="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input  type="text" id="lastName" />
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" id="phone" />
        <button type="submit">Submit Info</button>
    </form>

);
}
export default General;