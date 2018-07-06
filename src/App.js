import React, { Component } from 'react';
import './App.css';
import UserInput from './IO/UserInput/UserInput';
import UserOutput from './IO/UserOutput/UserOutput';

class App extends Component {

  state = {
    username:"Joe"
  }

  textChangedHandler = (event) => {
    const value = event.target.value;
    this.setState( 
      {
        username:value
      }
    );
  }

  render() {
    const style = {
      border: '1px 1px solid black',
      font: 'comic sans'
  };

    return (
      <div className="App">
        <div>
          <UserInput 
            changed={this.textChangedHandler}
            username={this.state.username}/>
          <UserOutput 
            username={this.state.username}
            style={style}/>
        </div>
      </div>
    );
  }
}

export default App;
