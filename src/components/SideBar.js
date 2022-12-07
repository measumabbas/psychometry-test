import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { GiPapers } from 'react-icons/gi'
import { MdDashboardCustomize } from 'react-icons/md'
import { MdOutlineManageSearch } from 'react-icons/md'
import { MdReviews } from 'react-icons/md'
import { MdOutlineEventAvailable } from 'react-icons/md'
import { FaBlogger } from 'react-icons/fa'

const SideBar = () => {

    const location = useLocation();
    return (
        <div>
            <div className="side-bar">
                <Link to='/dashboard/dash'>
                    <div className={`list-item ${location.pathname === '/dashboard/dash' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <MdDashboardCustomize />
                        </div>
                        <div className="text">
                            <p>Dashboard</p>
                        </div>
                    </div>
                </Link>

                

                <Link to={'/dashboard/steps'}>

                    <div className={`list-item ${location.pathname === '/dashboard/steps' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <GiPapers />
                        </div>
                        <div className="text">
                            <p>Steps</p>
                        </div>
                    </div>
                </Link>


                <Link to={'/dashboard/services'}>

                    <div className={`list-item ${location.pathname === '/dashboard/services' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <MdReviews />
                        </div>
                        <div className="text">
                            <p>Services</p>
                        </div>
                    </div>
                </Link>

                <Link to={'/dashboard/ins'}>

                    <div className={`list-item ${location.pathname === '/dashboard/ins' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <MdOutlineEventAvailable />
                        </div>
                        <div className="text">
                            <p>Institutions</p>
                        </div>
                    </div>
                </Link>


                <Link to={'/dashboard/other'}>

                    <div className={`list-item ${location.pathname === '/dashboard/other' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <FaBlogger />
                        </div>
                        <div className="text">
                            <p>Submitted Responses</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/dashboard/about'}>

                    <div className={`list-item ${location.pathname === '/dashboard/about' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <MdOutlineManageSearch />
                        </div>
                        <div className="text">
                            <p>About Us</p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default SideBar