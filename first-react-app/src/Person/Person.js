import React from 'react';
//this is simply a function that returns something - can use es5 if needed. 
//by default react will pass props as a parameter to the function - you can call it what you want.
//note when using class based components it's {this.props.name} 
const person = (props) => {
    return (
    <div>
        <p>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
    </div>
    )
};

export default person;