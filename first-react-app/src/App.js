import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Matt', age: 28},
      {name: 'Paul', age: 64},
      {name: 'James', age: 22},
    ]
  }

  //a handler is a function that handles an event and should be named as so
  nameChangeHandler = () => {
    // console.log('Was clicked!');
    //to update the state:
    // don't do this: this.state.persons[0].name = "Matthew";
    // instead, use setState. This merges the differences between setState and state.
    this.setState({
      persons: [
        {name: 'Matthew', age: 28},
      ] 
    });
  }


  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        {/* //notice capital C */}
        <button onClick={this.nameChangeHandler}></button>
        <Person name="{this.state.persons[0].name" age="28" />
        <Person name="Paul" age="64">My Hobbies: table tennis</Person>
        <Person name="James" age="22" />
      </div>
    );

    // the above code compiles to:
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I'm a React App'));
  }
}

export default App;
