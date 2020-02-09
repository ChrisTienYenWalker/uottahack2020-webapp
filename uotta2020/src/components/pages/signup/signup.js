import React from 'react'
import './signup.css'
import Fillout from './fillout.js'
import { Link } from 'react-router-dom';


function Signup() {
    return (
        <div className="signup">
            <div className="background">
                <p className="stuff">UottawaHackathon2020</p>
                <div className="white">
                    <div style={{ display: 'flex' }}>
                        <div className="left">
                        </div>
                        <div>
                            <Fillout />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;

