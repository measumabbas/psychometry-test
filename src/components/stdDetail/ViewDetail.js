import React from 'react'
import { Link, useParams } from 'react-router-dom'
import profile from './profile.jpg'
import './details.css'
const ViewDetail = () => {

    const {id} = useParams()
  return (

    <div>
        <div className="details-container">
            <div className="detail-img">
                <img src={profile} alt="" />
            </div>
            <div className="details-content">
                <div className="personal">
                    <h1>About</h1>

                    <div className="about">
                    <table className="table">
                
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Measum Abbas</td>
                    </tr>
                    <tr>
                        <td>Father's Name</td>
                        <td>Muhammad Yaqoob</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>maisumabbas.charbu@gmail.com</td>
                    </tr>
                    <tr>
                        <td>CNIC</td>
                        <td>7150110931005</td>
                    </tr>
                    <tr>
                        <td>Whats App Number</td>
                        <td>03479838577</td>
                    </tr>
                    <tr>
                        <td>Gender </td>
                        <td>Male</td>
                    </tr>
                    <tr>
                        <td>District</td>
                        <td>Gilgit</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>Danyore</td>
                    </tr>
                    
                </tbody>
            </table>
                    </div>
                </div>
                <div className="qualification">
                    <h2>Qualifications</h2>
                    <table className="table">
                
                <tbody>
                    <tr>
                        <td>SSC-2</td>
                        <td>From GHSSC in 2017</td>
                    </tr>
                    <tr>
                        <td>HSSC-2</td>
                        <td>From GHSSC in 2019</td>
                    </tr>
                </tbody>
            </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewDetail