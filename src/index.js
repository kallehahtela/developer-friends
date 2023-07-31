import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { Developers } from './Developers';

// React 17

//
//ReactDOM.render(
//              <div>
//                <CardList Developers={Developers}/>
//              </div>
//, document.getElementById('root'));

// REACT 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
            <App />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();