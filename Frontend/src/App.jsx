import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import SplashView from './pages/SplashView'
import UserProtextWrapper from './pages/UserProtextWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'

const App = () => {
  return (
   <div>
     <Routes>
       <Route path='/' element={<SplashView />} />
       <Route path='/login' element={<UserLogin />} />
       <Route path='/signup' element={<UserSignup />} />
       <Route path='/riding' element={<Riding />} />

       <Route path='/home' element={
        <UserProtextWrapper>
        <Home />
        </UserProtextWrapper>
       } />
       <Route path="/user/logout"  element ={
        <UserProtextWrapper>
          <UserLogout />
        </UserProtextWrapper>
       } />
       <Route path='/captain-login' element={<CaptainLogin />} />
       <Route path='/captain-signup' element={<CaptainSignup />} />
     <Route path="/captain-home" element={
      <CaptainProtectWrapper>
      <CaptainHome />
      </CaptainProtectWrapper>
     } />
     <Route path="/captain/logout" element={
      <CaptainProtectWrapper>
      <CaptainLogout />
      </CaptainProtectWrapper>
     } />
       </Routes>
   </div>
  )
}

export default App
