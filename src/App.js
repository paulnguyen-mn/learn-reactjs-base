import React from 'react';
import './App.scss';
import logo from './logo.svg';

function App() {
  const name = 'Thiết Mộc Chân';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Easy Everything',
  };
  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>LPPD</p>
        <p>
          Xin chao {name} - {age} - {isMale ? 'Male' : 'Female'} {null} {undefined}
        </p>
        {isMale ? <p>Male</p> : <p>Female</p>}
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale && (
          <>
            <p>frag</p>
            <p>frag</p>
            <p>frag</p>
          </>
        )}
        <p>{student.name}</p>
        <p>{student.toString()}</p>

        <ul>
          {colorList.map((color) => (
            <li key={color} style={{ color: color }}>
              {color}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
