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
  nameChangeHandler = (newAge) => {
    // console.log('Was clicked!');
    //to update the state:
    // don't do this: this.state.persons[0].name = "Matthew";
    // instead, use setState. This merges the differences between setState and state.
    this.setState({
      persons: [
        {name: 'Matthew', age: newAge},
        {name: 'Pamela', age: 60},
      ] 
    })
  }

  nameChangeHandler2 = (event) => {
    // console.log('Was clicked!');
    //to update the state:
    // don't do this: this.state.persons[0].name = "Matthew";
    // instead, use setState. This merges the differences between setState and state.
    this.setState({
      persons: [
        {name: event.target.value, age: 28},
        {name: 'Paul', age: 64},
      ] 
    })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        {/* //notice capital C in onClick */}
        
        <button style={style} onClick={this.nameChangeHandler.bind(this, "29")}>Button</button>

        {/* another way you could call the function is (this way can be inefficient) (remember a arrow function like this automatically returns): 
        <button onClick={() => this.nameChangeHandler('Matthew')}>Button</button> */}

        <Person changed={this.nameChangeHandler2} name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={this.nameChangeHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: table tennis</Person>
        <Person name="James" age="22"/>
      </div>
    );

    // the above code compiles to:
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I'm a React App'));
  }
}

export default App;
