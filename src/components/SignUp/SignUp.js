import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css';
import logo from './gb.png'
const SignUp = () => {
  return (
    <div className="sign-container">
        <div className="sign-main-section">
            <div className="sign-text-section">
                <div className="head-sec">
                    <div className="img">
                    <img src={logo} alt="" />

                    </div>
                    <h2>Supreme Applet Court Gilgit Baltistan</h2>
                </div>
            </div>
            <div className="sign-main-log">
                <div className="signup-section">
                    <div className="sign-section">
                        <img src={logo} alt=""/>
                        <h2>Registration Form</h2>
                    </div>
                    <div className="from-sec">
                        <form action="">
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <br/>
                            <input type="text" placeholder="Phone Number"/>
                            <select name="myCars" id="cars" value="Job Title">
                                <option value=""> Job Title</option>
                                <option value=""> Judge</option>
                                <option value=""> Advocate</option>
                                <option value=""> Administaration</option>
                                <option value=""> Visiter</option>
                            </select>
                            <br/>
                            <input type="password" placeholder="Password"/>
                            <input type="password" placeholder="Retype Password"/>
                            <br/>
                            <div className="sign-sec">
                                <Link to='/dashboard/dash'>

                                <input type="button" value="SIGNUP"/>
                                </Link>
                            </div>
                            <div className="sign-link">
                                <h3>If you have already account?<Link to='/'>Login</Link></h3>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp