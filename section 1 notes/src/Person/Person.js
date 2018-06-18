import React from 'react';

import './Person.css';

//this is simply a function that returns something - can use es5 if needed. 
//by default react will pass props as a parameter to the function - you can call it what you want.
//note when using class based components it's {this.props.name} 
const person = (props) => {
    return (
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};

export default person;