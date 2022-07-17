import React from 'react'
import { GiInjustice } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FaUniversity } from 'react-icons/fa'
import { GiPapers } from 'react-icons/gi'
import { MdDashboardCustomize } from 'react-icons/md'
import { MdAppRegistration } from 'react-icons/md'
import { MdOutlineManageSearch } from 'react-icons/md'
import { ImHammer2 } from 'react-icons/im'

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
                <Link to='/dashboard/institution'>
                    <div className={`list-item ${location.pathname === '/dashboard/institution' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <MdOutlineManageSearch />
                        </div>
                        <div className="text">
                            <p>Manage Courses</p>
                        </div>
                    </div>
                </Link>

                <Link to='/dashboard/judiciary'>

                    <div className={`list-item ${location.pathname === '/dashboard/judiciary' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <GiInjustice />
                        </div>
                        <div className="text">
                            <p>Applications</p>
                        </div>
                    </div>
                </Link>

                <Link to='/dashboard/proposedlist'>

                    <div className={`list-item ${location.pathname === '/dashboard/proposedlist' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <GiPapers />
                        </div>
                        <div className="text">
                            <p>Proposed List</p>
                        </div>
                    </div>
                </Link>

                <Link to='/dashboard/registrar'>

                    <div className={`list-item ${location.pathname === '/dashboard/registrar' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <MdAppRegistration />
                        </div>
                        <div className="text">
                            <p>Registrar</p>
                        </div>
                    </div>
                </Link>

                <Link to='/dashboard/hearings'>

                    <div className={`list-item ${location.pathname === '/dashboard/hearings' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <ImHammer2 />
                        </div>
                        <div className="text">
                            <p>Hearings</p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default SideBar