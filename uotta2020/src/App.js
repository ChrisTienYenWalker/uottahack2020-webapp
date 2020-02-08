import React from 'react';
import "firebase/auth";
import LoginPage from "./components/pages/login/loginpage"
import HomePage from './components/pages/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

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


