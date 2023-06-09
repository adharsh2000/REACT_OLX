import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import firebase from './firebase/config' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);

