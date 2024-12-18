import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <title>yubutb</title>
    <App />
    {/* <video width="500" controls >
    <source src="./0001-0250.mp4" type="video/mp4"></source>
    <source src="./0001-0250.webm" type="video/webm"/>
    Your browser does not support HTML video.
  </video> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

