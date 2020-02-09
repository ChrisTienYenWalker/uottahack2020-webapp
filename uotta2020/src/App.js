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
function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      {(user == null) ? <Redirect to = '/login' /> : ''}
      <Switch>
        <Route path='/login' component={() => <LoginPage setuser = {setUser}/>} />
        <Route path='/home' component={() => <HomePage user = {user}/>} />
        <Route component = {() => <LoginPage setuser = {setUser}/>} />
      </Switch>
    </Router>
  )
}


export default App;


