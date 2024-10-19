import React, { useState } from 'react'
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import './nav.css'
import { useNavigate } from 'react-router-dom';
import ChipTabs from './NavA';

const Nav = () => {
  const [shownav, setShownav] = useState(false)
  const [showLangDropDown, setShowLangDropDown] = useState(false)

  const navigate = useNavigate()
  const tabs = ["Home", "Search", "About", "FAQ", "Register", "Login"];

  const toggleLangDropDown = () => {
    setShowLangDropDown(!showLangDropDown)
  }

  return (
    <nav>
      <div onClick={() => setShowLangDropDown(false)} className={`shadow_n_lang ${showLangDropDown ? 'show':''}`} />
      <div onClick={() => setShownav(false)} className={`shadow_n_nav_mob ${shownav ? 'show':''}`} />
      <div className='container'>
        <div className='nav_head'>
          <h4 onClick={() => navigate('/')} className='logo_n'>Rank</h4>
          <div className={`center_nav_n ${shownav ? "show_nav" : ""}`}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>get</li>
              <li onClick={() => navigate('/login')}>Log in</li>
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
                <span className='icon'><IoChatbubbleEllipsesSharp /></span>
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