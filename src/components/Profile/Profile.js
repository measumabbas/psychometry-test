import React from 'react'
import { Link } from 'react-router-dom'
import './profile.css'
import {CgProfile} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'
import {TiMessages} from 'react-icons/ti'
import {FiLogOut} from 'react-icons/fi'

const Profile = ({userModal,setUserModal}) => {
  return (
    <div>
        <div className="profile2">
                <div className="items">
                    <CgProfile/>
                    <p>My Profile</p>
                </div>
                <div className="items">
                   <FiSettings/>
                    <p>Settings</p>
                </div>
                <div className="items">
                   <TiMessages/>
                    <p>Messages</p>
                </div>
               

                <Link to='/'>
                    <div className="items log">
                       <FiLogOut/>
                        <p>Logout</p>
                    </div>
                </Link>
            </div>
    </div>
  )
}

export default Profile