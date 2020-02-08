import React from 'react';
import "firebase/auth";
import LoginPage from "./components/pages/login/loginpage"
import HomePage from './components/pages/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <LoginPage /> */}
      {/* //<Signup />
        //<HomePage /> */}
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/home' component={HomePage} />
        <Route component = {LoginPage} />
      </Switch>
    </Router>
  )
}


export default App;


