import React from 'react';
import FirebaseApp from './firebase.js';
import "firebase/auth";
import Loginpage from "./components/pages/login/loginpage"
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
      <Loginpage></Loginpage>
    )
  }
}



export default App;


