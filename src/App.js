import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component { 
  state = { 
    persons: [
      {name: 'Kendall', age: 25},
      {name: 'Andrea', age: 22},
      {name: 'Hiro', age: 14}

    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    console.log('Clicked to see if works');
    // this.state.persons[0].name = 'Kendall'; Do not do this
    this.setState({
      persons: [
        {name: 'Pao-Pao', age: 25},
        {name: 'Andrea', age: 22},
        {name: 'Hiro', age: 7}
  
      ]
    })
  }

  render() {
    return (
      <div className = "App">
        <h1>Hi, this react app should be working...</h1>
        <p> This will HOPEFULLY work</p>
        <button onClick= {this.switchNameHandler}>Switch Names on this DOM</button>
        <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}/>
        <Person name ={this.state.persons[1].name} age = {this.state.persons[1].age}> Favorite Show: Avatar The Last Airbender</Person>
        <Person name ={this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    )
  }
}

export default App;
