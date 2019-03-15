import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ''
    }
  }

  handleChange = (value) => {
    this.setState({
      userInput: value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>It's working!</h1>
        <input type='text' onChange={(e)=>{this.handleChange(e.target.value)}}></input>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

//test


















































// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       message: ""
//     }
//   }

//   handleChange(value) {
//     this.setState({
//       message: value
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <input onChange={(e) => this.handleChange(e.target.value)}></input>
//         <p>{this.state.message}</p>
//       </div>
//     );
//   }
// }
// // class App extends Component {
// //   constructor() {
// //     super();

// //     this.state = {
// //       text: ""
// //     }
// //   }

// //   handleChange(value) {
// //     this.setState({
// //       text: value
// //     })
// //   }


// //   render() {
// //     return (
// //       <div className="App">
// //         <input onChange={(e) => this.handleChange(e.target.value)}/>
// //         <p>{this.state.text}</p>
// //       </div>
// //     );
// //   }
// // }

// export default App;
