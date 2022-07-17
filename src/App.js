import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Judiciary from './components/Judiciary';
import Institution from './components/Institution';
import ProposedList from './components/ProposedList/ProposedList';
import {useLocation} from 'react-router-dom'
import Profile from './components/Profile/Profile';
import { useState } from 'react';
import Modal from './components/addCaseModal/Modal';
import Dashboard from './components/Dashboard/Dashboard';
import Hearings from './components/Hearings/Hearings';
import Registrar from './components/Registrar/Registrar';
import Login from './components/Login/Login';
import {Outlet} from 'react-router-dom'

function App() {

  const[userModal, setUserModal] = useState(false)
  return (

    <div className="nav-side-container">
      <Header setUserModal={setUserModal} userModal={userModal}/>
      
      
      <div className="left-right-container">
      <SideBar/>
      <div className="graph-bar">
        {
          userModal && <Profile onBlur={()=> setUserModal(!userModal)}/>            
        }

        <Outlet/>
      </div>
      </div>
    </div>

  );
}

export default App;
