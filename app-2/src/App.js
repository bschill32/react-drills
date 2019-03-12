import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: ['thing1', 'thing2', 'thing3', 'thing4', 'thing5', 'thing6', 'thing7']

    }
  }

  render() {
    let newList = this.state.list.map((item, index)=>{
      return <h2 key={index}>{item}</h2>
    })
    return (
      <div className="App">
        {newList}
      </div>
    );
  }
}

export default App;








































// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       list: [
//         "thing1",
//         "thing2",
//         'thing3',
//         'thing4',
//         'thing5',
//       ]
//     }
//   }
//   render() {
//     var things = this.state.list.map((e,i) => {
//       return (<h2 key={i}>{e}</h2>)
//     })
//     return (
//       <div className="App">
//         <h2>{things}</h2>
//       </div>
//     );
//   }
// }


// // class App extends Component {
// //   constructor() {
// //     super();

// //     this.state = {
// //       list: [
// //         "thing1",
// //         "thing2", 
// //         "thing3", 
// //         "thing4", 
// //         "thing5"
// //       ]
// //     }
// //   }

// //   render() {
// //     var things = this.state.list.map((e,i) => {
// //       return (
// //         <h2 key={i}>{e}</h2>
// //       )
// //     })
// //     return (
// //       <div className="App">
// //         <h2>{things}</h2>
// //       </div>
// //     );
// //   }
// // }

// export default App;
