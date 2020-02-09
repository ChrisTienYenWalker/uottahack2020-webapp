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
  const [user, setUser] = useState(null);
  return (
    <Router>
      {console.log(user)}
      {(user == null) ? <Redirect to = '/login' /> : <Redirect to = '/home' />}
      <Switch>
        <Route path='/login' component={() => <LoginPage setUser = {setUser}/>} />
        <Route path='/home' component={() => <HomePage user = {user}/>} />
        <Route component = {() => <LoginPage setUser = {setUser}/>} />
      </Switch>
    </Router>
  )
}


export default App;


