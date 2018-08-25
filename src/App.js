import React, { Component } from 'react';
import './App.css';

let list = [
  {
    id:1,
    name: 'John Lennon'
  },

  {
    id:2,
    name: 'Paul McCartney'
  },
  
  {
    id:3,
    name: 'George Harrison'
  },
  
  {
    id:4,
    name: 'Ringo Starr'
  },
]

class App extends Component {
  handleEvent = () => console.log('button clicked');
  
  render() {
    return  list.map(member =>
    <Beatle key={member.id} name={member.name} onVote={this.handleEvent}/>);
  }
}

class Beatle extends Component {
  handleClick = () => this.props.onVote();
   
  render() {
    return (
      <div className="App">
       {this.props.name} <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
export default App;
