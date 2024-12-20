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
import FaqPage from '../Faq/FaqPage'
import AboutPage from '../about/AboutPage'
import ContactUs from '../Contact/ContactUs'
import WaitingPage from '../waiting_and_404/WaitingPage'
import RSVP from '../home/RSVP/RSVP'

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
                <Route path='/about' element={ <AboutPage /> } />
                <Route path='/our values' element={ <OurValues /> } /> */}


                <Route path='/faq' element={ <FaqPage /> } />
                <Route path='/invest' element={ <WaitingPage /> } />
                <Route path='/waiting-list' element={ <RSVP /> } />

                
                <Route path='/home' element={ <Home /> } />
                <Route path='/about' element={ <AboutPage /> } />
                <Route path='/contact-us' element={ <ContactUs /> } />
                <Route path='/' element={ <Home /> } />
        </Routes>
        <Footer />
    </div>
  )
}

export default AppN