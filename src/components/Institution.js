import React from 'react'
import Course from './course/Course'
import {
  Accordion,
} from 'react-accessible-accordion';

import { Link } from 'react-router-dom';
import {IoIosAddCircleOutline} from 'react-icons/io'
const Institution = () => {

  const courseData = {
    name:'Web Development',
    category:'tech',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea nihil distinctio excepturi. Repudiandae sit iste repellat animi. Veritatis dolor doloribus nesciunt dicta voluptatum qui voluptatem nam et quisquam. AccusamusLorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea nihil distinctio excepturi. Repudiandae sit iste repellat animi. Veritatis dolor doloribus nesciunt dicta voluptatum qui voluptatem nam et quisquam. Accusamus",
    instructor:'Naeem Hussain',
    duration:'2 months',
    lastDate:'2 september 2020',
    startDate:'2 october 2020',
    fee:2500
  }
  return (
    <div>
      <div className="courses-head">
      <h3>Our Courses</h3>
      <Link to='/dashboard/modal'>
      <button>
        <IoIosAddCircleOutline/>
          Add Course
      </button>
      </Link>
      </div>
      <Accordion>
      <Course courseData={courseData}/>
      <Course courseData={courseData}/>
      <Course courseData={courseData}/>
      <Course courseData={courseData}/>
      </Accordion>
    </div>
  )
}

export default Institution