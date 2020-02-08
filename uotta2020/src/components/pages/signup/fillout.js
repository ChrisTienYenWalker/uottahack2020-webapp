import React from 'react'
import './signup'
import logo from '../login/logo.png'
import firebase from '../../../firebase'

function fillout(){
    return(
        <div className="right">
            <form>
                <input type="text" value="Email"></input>
                <input type="text" value="name"></input>
                <input type="text" value="password"></input>
                <input type="text" value="password confirmation"></input>
            </form>
            <br></br>
            <button>Sign Up</button>
            <br></br>
            <a href="#">sign in</a>
        </div>
    )
}

export default fillout;
