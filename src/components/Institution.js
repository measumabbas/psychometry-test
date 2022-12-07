import React from 'react'
import Course from './course/Course'
import {
  Accordion,
} from 'react-accessible-accordion';


const Institution = () => {


  const tests = ["Aplitude Test","Personality Test","Mental Health Test","Industarial/Business Test","Counseling Test ","Educational Test ","Test for Civil Services ","Test for Military "]
  return (
    <div>
      <div className="courses-head" style={{marginBottom:'50px',marginTop:'20px'}}>
        <h3>Available quizzes</h3>
      </div>
      <Accordion>
        {
          tests.map((test,index) =>{
            return <Course name={test} index={index} key={index}/>
          })
        }
      </Accordion>
    </div>
  )
}

export default Institution