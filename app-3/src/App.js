import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      list: ['thing1', 'thing2', 'thing3', 'thing4', 'thing5', 'thing6', 'thing7'],
      filterStr: ''
    }
  }

  handleChange(value){
    this.setState({
      filterStr: value
    })
  }

  render() {
    let filteredStr = this.state.list.filter((item, index, array)=>{
      return item.includes(this.state.filterStr)
    }).map((item, index, array)=>{
      return <h2 key={index}>{item}</h2>
    })
    
    return (
      <div className="App">
        <input onChange={(e)=>{
          this.handleChange(e.target.value)
        }}>
        </input>
        {filteredStr}
      </div>
    );
  }
}















































// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
