import React, {useState} from 'react';
import logo from './logo.png';
import './App.css';
import FirebaseApp from '../../../firebase.js';
import "firebase/auth";

function LoginPage(props) {
   
var firebaseAuth = FirebaseApp.auth();
const [message, setMessage] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");

        return (
            <div className="App">
                <header className="App-header ">
                    <div className="ground">
                        <p>UottawaHackathon2020</p>
                        <div style = {{display: 'flex'}}>
                            <div className="lefta">
                                <p>"He who has health has hope; and he who has hope has everything" - Arabian proverb</p>
                            </div>
                            <div className="righta">
                                <h1>Drug Time</h1>
                                <img src={logo} className="App-Logo" alt="logo" />
                                <form className="forms" onKeyPress={async (event) => {
                                    if (event.key == "Enter") {
                                        var user = await firebaseAuth.signInWithEmailAndPassword(email, password).catch(function (error) {
                                            // Handle Errors here.
                                            var errorCode = error.code;
                                            var errorMessage = error.message;
                                            console.log(email);
                                            setMessage(errorMessage);
                                            // ...
                                        });

                                        if (user != null) {
                                            console.log(user.user.email)
                                        }
                                        else {
                                            console.log("bad")
                                        }
                                    }
                                }
                                }>
                                    <h3 className="wrong">{message}</h3>
                                        <p>Email:</p>
                <input type="email" value={email} name="name" onChange={(e) => setemail(e.target.value)}/>
                                        <br></br>
                                    <p>Password:</p>
                <input type="password" name="password" onChange={(e)=>setpassword(e.target.value)}/>
                                </form>
                                <br></br>
                                <button className="button"
                                    onClick={async () => {
                                        var user = await firebaseAuth.signInWithEmailAndPassword(email, password).catch(function (error) {
                                            // Handle Errors here.
                                            var errorCode = error.code;
                                            var errorMessage = error.message;
                                            console.log(errorMessage)
                                            setMessage(errorMessage);
                                            // ...
                                        });

                                        if (user != null) {
                                            console.log(user.user.email)
                                        }
                                        else {
                                            console.log("bad")
                                        }
                                    }
                                    }>Log Into Your Most Important App</button>
                                <br></br>
                                <a href="#" className="subtext">Not signed up</a>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
}


export default LoginPage;

