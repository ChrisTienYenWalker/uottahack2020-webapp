import React from 'react';
import logo from './logo.png';
import './App.css';
import FirebaseApp from '../../../firebase.js';
import "firebase/auth";
import image from './image.jpg'

var firebaseAuth = FirebaseApp.auth();

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
            <div className="App">
                <header className="App-header ">
                    <div className="background">
                        <p>UottawaHackathon2020</p>
                        <div style = {{display: 'flex'}}>
                            <div className="left">
                                <p>"He who has health has hope; and he who has hope has everything" - Arabian proverb</p>
                            </div>
                            <div className="right">
                                <h1>Drug Time</h1>
                                <img src={logo} className="App-Logo" alt="logo" />
                                <form className="forms" onKeyPress={async (event) => {
                                    if (event.key == "Enter") {
                                        var user = await firebaseAuth.signInWithEmailAndPassword(this.state.textEmail, this.state.textPassword).catch(function (error) {
                                            // Handle Errors here.
                                            var errorCode = error.code;
                                            var errorMessage = error.message;
                                            console.log(errorMessage)
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
                                    <label>
                                        Email:
                <input type="text" name="name" onChange={(event) => {
                                            this.setState({
                                                textEmail: event.target.value
                                            })
                                        }} />
                                        <br></br>
                                    </label>
                                    Password:
                <input type="text" name="password" onChange={(event) => {
                                        this.setState({
                                            textPassword: event.target.value
                                        })
                                    }} />
                                </form>
                                <br></br>
                                <button className="button"
                                    onClick={async () => {
                                        var user = await firebaseAuth.signInWithEmailAndPassword(this.state.textEmail, this.state.textPassword).catch(function (error) {
                                            // Handle Errors here.
                                            var errorCode = error.code;
                                            var errorMessage = error.message;
                                            console.log(errorMessage)
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
}



export default App;

