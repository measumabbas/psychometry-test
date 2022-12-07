import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Profile from './components/Profile/Profile';
import { useState } from 'react';
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
