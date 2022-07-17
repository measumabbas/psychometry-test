import React from 'react'
import './dashboard.css'
import { IoCheckmarkDone } from 'react-icons/io5'
import { AiOutlineBarChart } from 'react-icons/ai'
import { MdPendingActions } from 'react-icons/md'
import { BiBarChart } from 'react-icons/bi'
import { FaUserGraduate } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import DonutChart from "react-donut-chart";


const Dashboard = () => {
  return (
    <div>
      <div className="dash-top">
        <div className="image-side">
          <img src="https://img.icons8.com/color/48/000000/administrator-male-skin-type-7.png" />
        </div>
        <div className="dash-text">
          <p>Wellcome Back Admin Name</p>
          <p>Here is How we are performing</p>
        </div>
      </div>

      <div className="chart-side">
        <div className="top-charts">
          <div className="top-chart" style={{ backgroundColor: '#F2143F' }}>
            <div className="icon-left"><IoCheckmarkDone style={{ color: '#34A853' }} /></div>
            <div className="top-chart-text">
              <p>Total Students</p>
              <p>20000</p>
            </div>
            <div className="icon-right">
              <FaUserGraduate style={{ color: '#34A853' }} />
            </div>
          </div>
          <div className="top-chart" style={{ backgroundColor: '#FCA508' }}>
            <div className="icon-left"><MdPendingActions style={{ color: '#34A853' }} /></div>
            <div className="top-chart-text">
              <p>Total Courses</p>
              <p>30000</p>
            </div>
            <div className="icon-right">
              <ImBooks style={{ color: '#34A853' }} />
            </div>
          </div>
          <div className="top-chart" style={{ backgroundColor: '#FCA508' }}>
            <div className="icon-left"><MdPendingActions style={{ color: '#34A853' }} /></div>
            <div className="top-chart-text">
              <p>Applications</p>
              <p>30000</p>
            </div>
            <div className="icon-right">
              <BsFillPersonCheckFill style={{ color: '#34A853' }} />
            </div>
          </div>
          <div className="top-chart" style={{ backgroundColor: '#F2143F' }}>
            <div className="icon-left"><IoCheckmarkDone style={{ color: '#34A853' }} /></div>
            <div className="top-chart-text">
              <p>Total Faculty</p>
              <p>20000</p>
            </div>
            <div className="icon-right">
              <GiTeacher style={{ color: '#34A853' }} />
            </div>
          </div>
        </div>

        <div className="down-charts">

          <div className="down-left-chart">

            <DonutChart
              data={[
                {
                  label: "",
                  value: 25,
                },
                {
                  label: "",
                  value: 75,
                },
              ]}
              legend={false}
              interactive={false}
              height={150}
              width={150}
              colors={["#fff", "#FFDB58"]}
              innerRadius={0.5}
            />
          </div>
          <div className="down-right-chart">

            <DonutChart
              data={[
                {
                  label: "",
                  value: 40,
                },
                {
                  label: "",
                  value: 60,
                },
              ]}
              legend={false}
              interactive={false}
              height={150}
              width={150}
              colors={["#fff", "#1FACA5"]}
              innerRadius={0.5}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard