import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      input: value
    })
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }


  render() {
    var list = this.state.list.map((element, index) => {
      return (
        <Todo key={index} task={element}></Todo>
      )
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input value = {this.state.input}
            placeholder="Enter New Task"
            onChange={(e) => this.handleInputChange(e.target.value)}></input>
          <button onClick={this.handleAddTask}>Add</button>
        </div>
        {list}
      </div>
    );
  }
}

export default App;
