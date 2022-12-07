import React ,{useState,useEffect} from 'react'
import './dashboard.css'
import axios from 'axios'
import {BiTestTube} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {AiOutlineNotification} from 'react-icons/ai'
import {MdOutlineNotificationsActive} from 'react-icons/md'
import {AiOutlineApartment} from 'react-icons/ai'
import {BiLibrary} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineLogout} from 'react-icons/md'
const Dashboard = () => {
  const [dashData,setDashData] = useState({
    students:0,
    courses:0,
    applicants:0,
    faculty:0
  })

  const getDashData = async ()=>{
    const res = await axios.get('http://localhost:4000/api/v1/admin/count');
    setDashData({
      students:res.data.stdCount,
      courses:res.data.courseCount,
      applicants:res.data.stdCount + res.data.facCount,
      faculty:res.data.facCount
    })
    console.log(dashData)
  }

  useEffect(() => {
    getDashData()
  }, [])
  // #288140
  return (
    <>
    <div className='dash-container'>
      <Link to={'/dashboard/institution'}>
      <div className="testimonial-home">
        <BiTestTube style={{width:'30px',height:'30px'}}/>
        <span>Test Types</span>
      </div>
      </Link>
      
      <Link to={'/dashboard/notifications'}>
      <div className="testimonial-home">
        <AiOutlineNotification style={{width:'30px',height:'30px'}}/>
        <span>Notifications</span>
      </div>
      </Link>
      <Link to={'/dashboard/active'}>
      <div className="testimonial-home">
        <MdOutlineNotificationsActive style={{width:'30px',height:'30px'}}/>
        <span>Active Test</span>
      </div>
      </Link>
      <Link to={'/dashboard/partner'}>
      <div className="testimonial-home">
        <AiOutlineApartment style={{width:'30px',height:'30px'}}/>
        <span>Partners</span>
      </div>
      </Link>
    </div>

    <div className="dash-container">
    <Link to={'/dashboard/library'}>
      <div className="testimonial-home">
        <BiLibrary style={{width:'30px',height:'30px'}}/>
        <span>Library Resourses</span>
      </div>
      </Link>
    <Link to={'/dashboard/profile'}>
      <div className="testimonial-home">
        <CgProfile style={{width:'30px',height:'30px'}}/>
        <span>Profile</span>
      </div>
      </Link>
    <Link to={'/'}>
      <div className="testimonial-home" style={{backgroundColor:'#EA4335'}}>
        <MdOutlineLogout style={{width:'30px',height:'30px',color:'#fff'}}/>
        <span>Logout</span>
      </div>
      </Link>
    </div>
    </>
    
  )
}

export default Dashboard