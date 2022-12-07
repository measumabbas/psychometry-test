import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {GiTeacher} from 'react-icons/gi'
import {FaUserGraduate} from 'react-icons/fa'
import Course from './course/Course'
import Course2 from './course/Course2'
import Quiz from './Quiz/Quiz'


const Judiciary = () => {
  const name = localStorage.getItem('name')
  const index = localStorage.getItem('index')
  return (

    <div>
     <Course2 name={name} index={index}/>

     <Quiz/>
    </div>
  )
}

export default Judiciary