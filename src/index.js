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
import SideBar from './components/SideBar';
import Ins from './components/Others/Ins';
import About from './components/Others/About';
import Others from './components/Others/Others';
import Steps from './components/Others/Steps';
import Services from './components/Others/Services';
import QuizDetail from './components/QuizDetail';
import Notifications from './components/Notifications';
import Active from './components/Active';
import Partners from './components/Partners';
import Profile from './components/Profile';
import Library from './components/Library';

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
          <Route path='sidebar' element={<SideBar/>}/>
          <Route path='ins' element={<Ins/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='other' element={<Others/>}/>
          <Route path='other/:id' element={<QuizDetail/>}/>
          <Route path='steps' element={<Steps/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='notifications' element={<Notifications/>}/>
          <Route path='active' element={<Active/>}/>
          <Route path='partner' element={<Partners/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='library' element={<Library/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
