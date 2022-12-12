import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiApp from './MuiApp';
import reportWebVitals from './reportWebVitals';
//import Amplify from 'aws-amplify'
//import config from './aws-exports' // contains the config props for the activityAPI endpoint
//Amplify.configure(config)

ReactDOM.render(
    // Strict mode intentionally renders components twice.
    // See https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects.
    //<React.StrictMode>
    //  <App />
    //</React.StrictMode>,
    <MuiApp />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
