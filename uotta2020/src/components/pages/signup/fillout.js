import React, { useState } from 'react'
import './signup'
import logo from '../login/logo.png'
import firebase from '../../../firebase'
import { Link, Redirect } from 'react-router-dom';

var db = firebase.firestore();
var firebaseAuth = firebase.auth();

function Fillout() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState("");
    const [message, setMessage] = useState("");
    const [switchToHome, setSwitchToHome] = useState(false);


    const register = async () => {
        try {
            if (password == check) {
                const cred = await firebaseAuth.createUserWithEmailAndPassword(email, password);
                if (cred.user !== null) {
                    //console.log('hi')
                    setSwitchToHome(true);
                } else {
                    //console.log('bad')
                    return;
                }
                let res = db.collection('users').doc()
            } else {
                const x = "passwords needs 8 characters, 1 number and 1 letter";
                setMessage(x);
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }


    return (
            <div className="right">
                {(switchToHome) ? <Redirect to = '/home' /> : ''}
                <br></br>
                <h1>Drug Time</h1>
                <img src={logo} className="App-Logo" />
                <br></br>
                <form className="form">
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" type="Email" id="email"></input>
                    <br></br>
                    <input value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" type="text" id="name"></input>
                    <br></br>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="password" id="pass"></input>
                    <br></br>
                    <input value={check} onChange={(e) => { setCheck(e.target.value) }} type="password" placeholder="password confirmation" id="pass2"></input>
                    <br></br>
                    <h4 className="wrong">{message}</h4>
                </form>
                <br></br>
                <button className="button" onClick={register}
                >Sign Up</button>
                <br></br>
                <br></br>
                <Link to="/login" className="subtext">Log In</Link>
            </div>
        )
    }

    export default Fillout;
