/*instructions:Create TWO new components: UserInput and UserOutput
-UserInput should hold an input element, UserOutput two paragraphs
-Output multiple UserOutput components in the App component (any paragraph texts of your choice)
-Pass a username (of your choice) to UserOutput via props and display it there
-Add state to the App component (=> the username) and pass the username to the UserOutput component
-Add a method to manipulate the state (=> an event-handler method)
-Pass the event-handler method reference to the UserInput component and bind it to the input-change event
-Ensure that the new input entered by the user overwrites the old username passed to UserOutput
-Add two-way-binding to your input (in UserInput) to also display the starting username
Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    userName3: 'Matt3'
  }

  userName3ChangeHandler = (event) => {
    this.setState( 
      {userName3: event.target.value}
      );
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Exercise 1</h1>
        </header>
        <UserOutput
        userName="Matt1"/>
        <UserOutput userName2="Matt2"/>
        <UserOutput userName3={this.state.userName3}/>
        <UserInput userName3={this.state.userName3} change={this.userName3ChangeHandler}/>
      </div>
    );
  }
}

export default App;
