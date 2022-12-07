import React from 'react'
import { MdQuiz } from 'react-icons/md'

import 'react-accessible-accordion/dist/fancy-example.css';
import './course.css'
const Course2 = ({ name }) => {
    const accordianStyle = {
        backgroundColor: '#148EBF',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        paddingLeft: '50px',
        paddingTop: '20px',
        paddingBottom: '20px',
        borderRadius: '5px',
        marginBottom: '10px'
    }
    return (

        <div style={{backgroundColor:'rgb(243, 243, 243)',paddingBottom:'20px'}}>

            <div className="course-desc" style={accordianStyle}>
                <p className="course-title" style={{ display: 'block' }}>
                   {name}
                </p>
                <div className="course-info">
                    <span>Marks  : 30</span>
                    <span>duration    : 30 minutes</span>
                    <span>description 1  : other</span>
                    <span>description 1   : other</span>
                </div>
            </div>
            <div className="course-2">

                <div className={`course_outer border`}>
                    <div className='course_icon'>
                        <MdQuiz />
                    </div>
                    <span>Start Quiz</span>
                </div>
            </div>
        </div>
    )
}

export default Course2