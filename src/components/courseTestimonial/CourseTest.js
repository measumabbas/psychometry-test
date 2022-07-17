import React from 'react'
import {GiTeacher} from 'react-icons/gi'
import {Link} from 'react-router-dom'
const CourseTest = ({data}) => {
  return (
    <div>
        <Link to={`/dashboard/${data.course}`}>
        <div className="testimonial" style={{backgroundColor:'#148EBF'}}>
            <div className="icon">
              <GiTeacher style={{width:'50px',height:'50px'}}/>
            </div>
            <div className="text">
              <span>{data.insName}</span>
              <p>{data.course}</p>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default CourseTest