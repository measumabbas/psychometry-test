import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Judiciary from './components/Judiciary';
import Institution from './components/Institution';
import Dashboard from './components/Dashboard/Dashboard';
import ProposedList from './components/ProposedList/ProposedList';
import Hearings from './components/Hearings/Hearings';
import Registrar from './components/Registrar/Registrar';
import SideBar from './components/SideBar';
import Modal from './components/addCaseModal/Modal';
import StdDetail from './components/stdDetail/StdDetail';
import ViewDetail from './components/stdDetail/ViewDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
      <Route path='/dashboard' element={<App/>}>
          <Route path='judiciary' element={<Judiciary/>}/>
          <Route path='institution' element={<Institution/>}/>
          <Route path='dash' element={<Dashboard/>}/>
          <Route path='proposedlist' element={<ProposedList/>}/>
          <Route path='hearings' element={<Hearings/>}/>
          <Route path='registrar' element={<Registrar/>}/>
          <Route path='sidebar' element={<SideBar/>}/>
          <Route path='modal' element={<Modal/>}/>
          <Route path=':course' element={<StdDetail/>}/>
          <Route path=':course/:id' element={<ViewDetail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
