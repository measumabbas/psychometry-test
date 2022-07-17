import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {AiFillDelete} from 'react-icons/ai'

import 'react-accessible-accordion/dist/fancy-example.css';
import './course.css'
const Course = ({courseData}) => {
    console.log(courseData)

    const accordianStyle = {
        backgroundColor: '#148EBF', 
        color: '#fff', 
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'30px'
    }
    return (
        <div>
                <AccordionItem style={{marginBottom:'20px'}}>
                    <AccordionItemHeading>
                        <AccordionItemButton style={accordianStyle}>
                            <div className="course-desc">
                                <p className="course-title">
                                    {courseData.name}
                                </p>
                                <div className="course-info">
                                    <span>Instructor  : {courseData.instructor}</span>
                                    <span>duration    : {courseData.duration}</span>
                                    <span>last date   : {courseData.lastDate}</span>
                                    <span>start of classes   : {courseData.startDate}</span>
                                    <div style={{marginTop:'15px'}}>

                                    <span>category   : {courseData.category}</span>
                                    <span>fee   : RS {courseData.fee}</span>
                                    </div>
                                </div>
                                <div className="delete"><AiFillDelete className='icon'/></div>
                            </div>
                        </AccordionItemButton>

                       
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        {courseData.desc}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
        </div>
    )
}

export default Course