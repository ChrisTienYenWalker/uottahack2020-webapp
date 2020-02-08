import React from 'react';
import "firebase/auth";
import LoginPage from "./components/pages/login/loginpage"
import HomePage from './components/pages/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <LoginPage />
      //<Signup />
      //<HomePage />
    )
  }


export default App;


