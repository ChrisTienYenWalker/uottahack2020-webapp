import React, {useState} from 'react'
import './signup'
import logo from '../login/logo.png'
import firebase from '../../../firebase'

function Fillout(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState("");
    const [message, setMessage] = useState("");



function good(){
    if(password !== check){
        const x = "passwords not the same";
        setMessage(x);
        return false
    }else{
        return true;
    }
}

    return(
        <div className="right">
            <br></br>
            <h1>Drug Time</h1>
            <img src={logo} className="App-Logo"/>
            <br></br>
            <form className="form">
                <input value = {email} onChange = {(e) => {setEmail(e.target.value)}} placeholder="Email" type="Email" id="email"></input>
                <br></br>
                <input value = {name} onChange={(e) => {setName(e.target.value)}} placeholder="Name" type="text" id="name"></input>
                <br></br>
                <input value = {password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="password" id="pass"></input>
                <br></br>
                <input value = {check} onChange={(e) => {setCheck(e.target.value)}} type="password" placeholder="password confirmation" id="pass2"></input>
                <br></br>
                <h4 className="wrong">{message}</h4>
            </form>
            <br></br>
            <button className="button" onClick={good}
            >Sign Up</button>
            <br></br>
            <br></br>
            <a href="#" className="subtext">Log In</a>
        </div>
    )
}

export default Fillout;
