import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // instead of slice you can use the spread operator:
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }



  nameChangedHandler = (event, id) => {
    // we want to update the state here (i.e. the two way binding) but only for the person in which the input value has been changed. We first have to find that person:
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //make a copy using spread operator:
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }
  
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    //set showPersons to what doesShow is not
    this.setState({showPersons: !doesShow});
  }



  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    ///it is better to put conditionally rendered content here, rather than within return. Remeber that within return it is JSX, but here it is normal JavaScript. This is the preffered way of outputting condition content
    let persons = null;
    if (this.state.showPersons) {
        persons = (
          <div>
            {/* a more dynamic way of outputting lists */}
            {this.state.persons.map((person, index) => {
              return <Person 
                click = {() => this.deletePersonHandler(index)}
                name = {person.name}
                age = {person.age} 
                key = {person.id}
                changed = {(event) => this.nameChangedHandler(event, person.id)} />
            })}
            {/* <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} /> */}
          </div>
        );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch Name</button>
          {/* render the persons variable */}
          {persons} 
          {/* so if the below expression is true, behind the scenes you're calling React.createElement()  */}
        {/* {this.state.showPersons ? 
          <div>  
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} />
          </div> : null 
        } */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
