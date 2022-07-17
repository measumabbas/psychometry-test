import React from 'react'
import { Link } from 'react-router-dom'
import './login.css';

import logo from './gb.png'
const Login = () => {
  return (
    <div className="login-container">
        <div className="login-main-section">
            <div className="login-text-section">
                <div className="img">
                    <img src={logo} alt=""/>
                </div>
                    <h2>Institute of professional  <br/>development <br/>KIU</h2>
            </div>
            <div className="login-section">
                <img src={logo} alt=""/>
                <h2>LOGIN</h2>
                <form action="">
                    <input type="text" placeholder="Name or Email"/>
                    <input type="password" placeholder="Password"/>
                    <div className="forget-pass">
                        <a href="">Forget Your Password?</a>
                    </div>
                    <div className="log-sec">
                        <Link to='/dashboard/dash'>
                        <input type="button" value="LOGIN"/>
                        </Link>
                    </div>
                    <div className="sign-link">
                        <h3>Don't have any account?<Link to='/signup'>Signup Now</Link></h3>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login