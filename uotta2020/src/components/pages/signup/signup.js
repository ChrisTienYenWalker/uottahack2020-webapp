import React from 'react'
import './signup.css'
import fillout from './fillout'
import Fillout from './fillout.js'

function Signup() {
    return (
        <div className="signup">
            <div className="background">
                <p className="stuff">UottawaHackathon2020</p>
                <div style={{ display: 'flex' }}>
                    <div className="left">
                    </div>
                    <div>
                        <Fillout />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;

