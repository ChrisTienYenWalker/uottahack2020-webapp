import React, { useState } from 'react';
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
const[user, setuser] = useState("")
  return (
    <Router>
      {/* <LoginPage /> */}
      {/* //<Signup />
        //<HomePage /> */}
      <Switch>
        <Route path='/login' component={() => <LoginPage setuser = {setuser}/>} />
        <Route path='/home' component={() => <HomePage user = {user}/>} />
        <Route component = {() => <LoginPage setuser = {setuser}/>} />
      </Switch>
    </Router>
  )
}


export default App;


