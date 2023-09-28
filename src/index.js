import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./utils/store";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDS3XNB6TKp-Tk1MhYnZp2YynKrJLD0oK4",
  authDomain: "clone-5a8a8.firebaseapp.com",
  projectId: "clone-5a8a8",
  storageBucket: "clone-5a8a8.appspot.com",
  messagingSenderId: "898560456737",
  appId: "1:898560456737:web:78805f941d955dbc098b60",
  measurementId: "G-FM7K77BHT9"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}><App /></Provider>
  </React.StrictMode>
);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);