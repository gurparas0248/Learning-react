import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';

class App extends Component {
  render(){
    return (
      <div className="App">

        

        <Message />


      {/* <Greet />
      <Welcome /> */}
      {/* <Greet name="paras" heroName="Superman">
        <p>This is Children props</p>
      </Greet>
      <Greet name="hahahah" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="Bitch" heroName="Spiderman"/>


      <Welcome name="paras" heroName="Superman" /> */}
          
       </div>
    );
  }
}

export default App;
