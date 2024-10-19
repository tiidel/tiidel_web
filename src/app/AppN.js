import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Register } from '../Auth/Register'
// import { Login } from '../Auth/Login'
import Nav from '../Header/Nav'
import { Register } from '../Auth/Register'
import { Login } from '../Auth/Login'
import SlideInNotifications from '../addons/SlideNotification'
import Footer from '../Footer/Footer'
import Home from '../home/Home'

const AppN = () => {
  return (
    <div>
      <SlideInNotifications />
      <Nav />
        <Routes>
          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
                {/* <Route path='/info_createaccount' element={ <AccountCreateInfo /> } />
                <Route path='/verify-email' element={ <VerifyEmail /> } />
                <Route path='/invitation' element={ <Invitation /> } />
                <Route path='/forgot-password' element={ <ForgotPasswordEmailForm /> } />
                <Route path='/reset-password' element={ <ResetPassword /> } />
                <Route path='/reset_link_info' element={ <ResetLinkInfo /> } />
                <Route path='/contact-us' element={ <ContactUs /> } />
                <Route path='/invitation/accept' element={ <InvitationRequest /> } />
                <Route path='/create content' element={ <Login /> } />
                <Route path='/our values' element={ <OurValues /> } /> */}


                {/* <Route path='/about' element={ <AboutPage /> } />
                <Route path='/faq' element={ <FaqPage /> } /> */}


                <Route path='/home' element={ <Home /> } />
                <Route path='/' element={ <Home /> } />
        </Routes>
        <Footer />
    </div>
  )
}

export default AppN