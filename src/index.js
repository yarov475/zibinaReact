import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDNxDq8uKM4SlDSNQQL618BboYgumOkCuw",
  authDomain: "artzibina.firebaseapp.com",
  databaseURL: "https://artzibina.firebaseio.com",
  projectId: "artzibina",
  storageBucket: "artzibina.appspot.com",
  messagingSenderId: "251755642891",
  appId: "1:251755642891:web:403e3d5812585f2e9f470e",
  measurementId: "G-BKL2G1T3GF"
};
firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
