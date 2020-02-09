import React, { useState } from 'react';
import "firebase/auth";
import LoginPage from "./components/pages/login/loginpage"
import HomePage from './components/pages/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Signup from './components/pages/signup/signup';
function App() {
  const [user, setuser] = useState(null);
  return (
    <Router>
      {/* {(user == null) ? <Redirect to = '/login' /> : ''} */}
      <Switch>
        <Route path='/login' component={() => <LoginPage setuser = {setuser}/>} />
        <Route path='/home' component={() => <HomePage user = {user}/>} />
        <Route path='/signup' component={() => <Signup user = {user}/>}/>
        <Route component = {() => <LoginPage setuser = {setuser}/>} />
      </Switch>
    </Router>
  )
}


export default App;


