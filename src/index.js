import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Copmonents/app';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
  );


// const jsxElement = <h1><App /></h1>;
// console.log(jsxElement);

// ReactDOM.render(jsxElement, document.getElementById('root'));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
