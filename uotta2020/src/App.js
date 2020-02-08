import React from 'react';
import FirebaseApp from './firebase.js';
import "firebase/auth";
import LoginPage from "./components/pages/login/loginpage"
import HomePage from './components/pages/home/HomePage';
import Signup from "./components/pages/signup/signup"
var firebaseAuth = FirebaseApp.auth();

function App() {
    return (
      <LoginPage />
      //<Signup />
      //<HomePage />
    )
  }


export default App;


