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
import { routeSeoConfig, withSEO } from '../lib/seoUtils'

const AppN = () => {

  const EnhancedRegister = withSEO(Register, routeSeoConfig.register);
  const EnhancedLogin = withSEO(Login, routeSeoConfig.login);
  const EnhancedFaq = withSEO(FaqPage, routeSeoConfig.faq);
  const EnhancedHome = withSEO(Home, routeSeoConfig.home);
  const EnhancedAbout = withSEO(AboutPage, routeSeoConfig.about);
  const EnhancedContact = withSEO(ContactUs, routeSeoConfig.contactUs);
  const EnhancedWaiting = withSEO(WaitingPage, routeSeoConfig.invest);
  const EnhancedRSVP = withSEO(RSVP, routeSeoConfig.waitingList);

  return (
    <div>
      <SlideInNotifications />
      <Nav />
        <Routes>
          <Route path='/register' element={<EnhancedRegister />} />
          <Route path='/login' element={ <EnhancedLogin /> } />
          <Route path='/faq' element={ <EnhancedFaq /> } />
          <Route path='/invest' element={<EnhancedWaiting />} />
          <Route path='/waiting-list' element={<EnhancedRSVP />} />
          <Route path='/home' element={<EnhancedHome />} />
          <Route path='/about' element={<EnhancedAbout />} />
          <Route path='/contact-us' element={<EnhancedContact />} />
          <Route path='/' element={<EnhancedHome />} />


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


        </Routes>
        <Footer />
    </div>
  )
}

export default AppN