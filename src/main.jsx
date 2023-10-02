import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEDCKMODAnTiwp89ZjPwNFmPGDHgLlYwE",
  authDomain: "ecommerce-belen.firebaseapp.com",
  projectId: "ecommerce-belen",
  storageBucket: "ecommerce-belen.appspot.com",
  messagingSenderId: "95845112801",
  appId: "1:95845112801:web:aefa7cfef6b74696e8d0a0"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
