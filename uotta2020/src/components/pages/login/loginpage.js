import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import FirebaseApp from '../../../firebase.js';
import "firebase/auth";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";


function LoginPage(props) {

    var firebaseAuth = FirebaseApp.auth();
    const [message, setMessage] = useState("");
    const [email, setemail] = useState("william.t2039@gmail.com");
    const [password, setpassword] = useState("");
    const [switchToHome, setSwitchToHome] = useState(false);

    const login = async (event) => {
        console.log("login")
        try {event.preventDefault() } catch(err) {}
        const user = await firebaseAuth.signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(email);
            setMessage(errorMessage);
            // ...
        });

        if (user != null) {
            console.log(user.user.email)
            props.setUser(user)
            setSwitchToHome(true);

        }
        else {
            console.log("bad")
        }
    }

    return (
        <div className="App">
            {switchToHome ? <Redirect to='/home' /> : ''}
            <header className="App-header ">
                <div className="ground">
                    <p>UottawaHackathon2020</p>
                    <div style = {{display: 'flex'}}>
                        <div className = 'lefta'>
                            <img src = {logo} style = {{width: '100%', height: '100%', objectFit: 'cover'}} />
                        </div>
                        <div className="righta">
                            <h1>Drug Time</h1>
                            <form className="forms" onSubmit={login}>
                                <h3 className="wrong">{message}</h3>
                                <input style={{ border: 'none', borderBottom: 'thin solid gray', padding: '0.2em 0.1em' }} placeholder="Email" type="email" value={email} name="name" onChange={(e) => setemail(e.target.value)} />
                                <div style={{ height: '1em' }}></div>
                                <input style={{ border: 'none', borderBottom: 'thin solid gray', padding: '0.2em 0.1em' }} placeholder="Password" type="password" name="password" onChange={(e) => setpassword(e.target.value)} />
                            </form>
                            <button className="button" onClick={login}>Login</button>
                            <br></br>
                            <Link to="/signup" className="subtext">Not Signed up yet</Link>
                            <br></br>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default LoginPage;

