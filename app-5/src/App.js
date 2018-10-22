import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://images.unsplash.com/photo-1540207738393-f771d46a71ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e8fe1eb2f876f9552f6ac8e8009ea32&auto=format&fit=crop&w=1200&q=60"}></Image>
      </div>
    );
  }
}

export default App;
