import React, { useState } from 'react'
import './style.css'
import { GiPapers } from 'react-icons/gi'
import { BsChevronDoubleRight } from 'react-icons/bs'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { FaUniversity } from 'react-icons/fa'
import { FaUniversalAccess } from 'react-icons/fa'
import { FiClipboard } from 'react-icons/fi'
import Table from '../Table/Table'

const ProposedList = () => {

  const [state, setState] = useState('');
  const [table, setTable] = useState(false)
  return (
    <div>
      <div className="proposed-header">
        <GiPapers style={{ height: '30px', width: '30px' }} />
        <p>Filter proposed Casses List Based on</p>
        <BsChevronDoubleRight style={{ height: '30px', width: '30px' }} />
      </div>
      <div className="proposed-body">
        <div className={`proposed-item ${state === 'c-type' ? 'border-bottom' : ''}`} onClick={() => setState('c-type')}>
          <div className="proposed-icon">
            <AiFillQuestionCircle />
          </div>
          <p>Case Type</p>
        </div>
        <div className={`proposed-item ${state === 'date' ? 'border-bottom' : ''}`} onClick={() => setState('date')}>
          <div className="proposed-icon">
            <BsFillCalendarDateFill />
          </div>
          <p>Date</p>
        </div>
        <div className={`proposed-item ${state === 'lawyer' ? 'border-bottom' : ''}`} onClick={() => setState('lawyer')}>
          <div className="proposed-icon">
            <FaUserAlt />
          </div>
          <p>lawyer</p>
        </div>
        <div className={`proposed-item ${state === 'option1' ? 'border-bottom' : ''}`} onClick={() => setState('option1')}>
          <div className="proposed-icon">
            <FaUniversity />
          </div>
          <p>option</p>
        </div>
        <div className={`proposed-item ${state === 'option2' ? 'border-bottom' : ''}`} onClick={() => setState('option2')}>
          <div className="proposed-icon">
            <FaUniversalAccess />
          </div>
          <p>option</p>
        </div>
        <div className={`proposed-item ${state === 'option3' ? 'border-bottom' : ''}`} onClick={() => setState('option3')}>
          <div className="proposed-icon">
            <FiClipboard />
          </div>
          <p>option</p>
        </div>
      </div>
      <div className="filter-type">
        {
          (state === 'c-type') && (

            <>
              <div className="input-item">
                <label htmlFor="case-type">Case Type</label>
                <select name="case-type" id="case-type">
                  <option value="case-type-1">case-type-1</option>
                  <option value="case-type-2">case-type-2</option>
                  <option value="case-type-3">case-type-3</option>
                  <option value="case-type-4">case-type-4</option>
                </select>
              </div>
              <input type="submit" value='Filter Cases' style={{ backgroundColor: '#34A853' }} onClick={()=> setTable(true)}/>
            </>
          )
        }
        {
          state === 'date' && (
            <>
              <div className="input-item">
                <label htmlFor="date">Select Date</label>
                <input type="date" id="date" name="date" />
              </div>
              <input type="submit" value='Filter Cases' style={{ backgroundColor: '#34A853' }} onClick={()=> setTable(true)}/>
            </>

          )
        }

        {
          state === 'lawyer' && (

            <>
              <div className="input-item">

                <label htmlFor="lawyer">Select lawyer</label>

                <select name="lawyer" id="lawyer">
                  <option value="Lawyer 1">Lawyer 1</option>
                  <option value="Lawyer 2">Lawyer 2</option>
                  <option value="Lawyer 3">Lawyer 3</option>
                  <option value="Lawyer 4">Lawyer 4</option>
                </select>

              </div>
              <input type="submit" value='Filter Cases' style={{ backgroundColor: '#34A853' }} onClick={()=> setTable(true)}/>
            </>
          )
        }

        {
          state === 'option1' && (
            <>
              <div className="proposed-input-item">
                <label htmlFor="input-1">option</label>
                <input type="text" id="input-1" name="input-1" />
              </div>
              <input type="submit" value='Filter Cases' style={{ backgroundColor: '#34A853' }} onClick={()=> setTable(true)}/>
            </>

          )
        }
        {
          state === 'option2' && (
            <>
              <div className="proposed-input-item">
                <label htmlFor="input-1">option</label>
                <input type="text" id="input-1" name="input-1" />
              </div>
              <input type="submit" value='Filter Cases' style={{ backgroundColor: '#34A853' }} onClick={()=> setTable(true)}/>
            </>

          )
        }
        {
          state === 'option3' && (
            <>
              <div className="proposed-input-item">
                <label htmlFor="input-1">option</label>
                <input type="text" id="input-1" name="input-1" />
              </div>
              <input type="submit" value='Filter Cases' style={{ backgroundColor: '#34A853' }} onClick={()=> setTable(true)}/>
            </>

          )
        }

      </div>

      <div className="proposed-header">
        <GiPapers style={{ height: '30px', width: '30px' }} />
        <p>Filtered cases Based On Input</p>
        <BsChevronDoubleRight style={{ height: '30px', width: '30px' }} />
      </div>

      {
        table && (
          <>
            <Table />
            <div className="btn">

              <input type="submit" value='Send to Registrar' style={{ backgroundColor: '#34A853' }} onClick={()=> setTable(false)}/>
            </div>
          </>
        )
      }
    </div>
  )
}

export default ProposedList