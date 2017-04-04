import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function tick() {
  const element = (
    <div className="wrapper">
      <h1>Clock</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
