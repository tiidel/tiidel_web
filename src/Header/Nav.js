import React, { useState } from 'react'
import { IoChatbubbleEllipsesSharp, IoGlobe, IoGlobeOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import './Navbar/nav.css'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import ChipTabs from './Navbar/NavA';

const Nav = () => {
  const [shownav, setShownav] = useState(false)
  const [showLangDropDown, setShowLangDropDown] = useState(false)

  const navigate = useNavigate()
  const tabs = ["Home", "Search", "About", "FAQ", "Register", "Login"];

  const toggleLangDropDown = () => {
    setShowLangDropDown(!showLangDropDown)
  }

  const removeMenu = (e) => {
    if(e.target.tagName === 'A') {
      setShownav(false)
    }
  }

  return (
    <nav>
      <div onClick={() => setShowLangDropDown(false)} className={`shadow_n_lang ${showLangDropDown ? 'show':''}`} />
      <div onClick={() => setShownav(false)} className={`shadow_n_nav_mob ${shownav ? 'show':''}`} />
      <div className='container'>
        <div className='nav_head'>
          <h4 onClick={() => navigate('/')} className='logo_n'>
            <img src={logo} alt='logo' width='100px' />
          </h4>
          <div className={`center_nav_n ${shownav ? "show_nav" : ""}`}>
            <ul onClick={e => removeMenu(e)}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/invest">Invest</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/faq">Frequent Questions</Link></li>
              <li><Link to="https://blog.tiidel.com">Our Blog</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Log In</Link></li>
            </ul>
            <ChipTabs tabs={tabs} />
          </div>
          <div className='mobile_nav_n'>
            <div onClick={() => navigate('/contact-us')} className='contact_url_n'>
              <span className='icon'><IoChatbubbleEllipsesSharp /></span>
              Contact us
            </div>
            <div onClick={toggleLangDropDown} className='change_lang_handler_n'>
              <div>
                <span className='icon'><IoGlobeOutline /></span>
                EN
              </div>
              <div className={`change_lang_dropdown_n ${showLangDropDown?'show_change_lang_dropdown_n': ''}`}>
                <ul>
                  <li>EN</li>
                  <li>FR</li>
                  <li>ES</li>
                  <li>DE</li>
                </ul>
              </div>
            </div>
            <div onClick={() => setShownav(!shownav)} className='burger_n'>
              {
                shownav
                ?
                <VscChromeClose />
                :
                <CgMenuRight />
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav