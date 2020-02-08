import React from 'react';
import FirebaseApp from './firebase.js';
import "firebase/auth";
import LoginPage from "./components/pages/login/loginpage"
import HomePage from './components/pages/home/HomePage';
var firebaseAuth = FirebaseApp.auth();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      textEmail: "",
      textPassword: ""
    });
  }

  render() {
    return (
      // <LoginPage />
      <HomePage />
    )
  }
}



export default App;


