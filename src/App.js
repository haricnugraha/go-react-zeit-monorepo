import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  let { step, data } = props;

  if (step === 'initial') {
    data = 'Fetch API...';
  }
  if (step === 'error') {
    data = 'Error!';
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
