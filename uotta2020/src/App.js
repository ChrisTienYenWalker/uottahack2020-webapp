import React from 'react';
import logo from './logo.png';
import './App.css';
import FirebaseApp from './firebase.js';
import "firebase/auth";

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
            <img src={logo} className="App-Logo" alt="logo" />
            <p>UottawaHackathon2020</p>
            <form className="forms" onKeyPress={ async (event) =>{
              if(event.key == "Enter"){
               var user = await firebaseAuth.signInWithEmailAndPassword(this.state.textEmail, this.state.textPassword).catch(function(error) {
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
            <button
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
              }>Log In</button>
            <br></br>
            <a href="#" className="subtext">Not signed up</a>
            <br></br>
            <a href="#" className="subtext">Forgot your password</a>
          </div>
        </header>
      </div>
    )
  }
}



export default App;


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

