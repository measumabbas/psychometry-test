import React from 'react'
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { MdQuiz } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

import 'react-accessible-accordion/dist/fancy-example.css';
import './course.css'
const Course = ({ name ,index,display}) => {
    // console.log('course')
    const accordianStyle = {
        backgroundColor: '#148EBF',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: '30px'
    }

    const navigate = useNavigate()

const handleClick = (e)=>{
    localStorage.setItem("name",name)
    localStorage.setItem("index",index)
    navigate('/dashboard/judiciary')


}
    return (
        <div className={`course-${index}`}>
            <AccordionItem style={{ marginBottom: '20px' }}>
                <AccordionItemHeading>
                    <AccordionItemButton style={accordianStyle}>
                        <div className="course-desc">
                            <p className="course-title">
                                {name}
                            </p>
                            <div className="course-info">
                                <span>Marks  : 30</span>
                                <span>duration    : 30 minutes</span>
                                <span>description 1  : other</span>
                                <span>description 1   : other</span>
                            </div>
                        </div>
                    </AccordionItemButton>


                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className={`course_outer`} id={`outer-${index}`} onClick={handleClick}>
                        <div className='course_icon'>
                            <MdQuiz />
                        </div>
                        <span>Start Quiz</span>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </div>
    )
}

export default Course