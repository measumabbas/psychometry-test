import React, { useState } from 'react'
import {VscLaw} from 'react-icons/vsc'
import {FaUniversalAccess} from 'react-icons/fa'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaUniversity} from 'react-icons/fa'
import {TiTickOutline} from 'react-icons/ti'
import {RiLogoutBoxLine} from 'react-icons/ri'
import {AiOutlinePlus} from 'react-icons/ai'
import Profile from './Profile/Profile'
import Modal from './addCaseModal/Modal'
import { Link } from 'react-router-dom'

import CourseTest from './courseTestimonial/CourseTest'

const Judiciary = () => {

  const data ={
    insName :'Naeem Hussain',
    course:'Web Development'
  }
  const data1 ={
    insName :'Essa Wali',
    course:'Graphic Design'
  }
  const data2 ={
    insName :'Rashid Mehmood',
    course:'Chinese Language'
  }
  return (
    <div>
        <div className="testimonials">
          
         <CourseTest data ={data}/>
         <CourseTest data ={data1}/>
         <CourseTest data ={data2}/>
         {/* <CourseTest data ={data}/>
         <CourseTest data ={data}/>
         <CourseTest data ={data}/>
         <CourseTest data ={data}/> */}


        </div>
    </div>
  )
}

export default Judiciary