import React from 'react'
import './home.css'
import HeroSection from './components/HeroSection'

const Home = () => {
  return (
    <div className='home_page'>
      <HeroSection />
      {/* <section className='landing'>
        <div className='landing_text'>It is never too late to invest in your future</div>
        <div className='landing_image'> </div>
        <div className='cta'>
          <button>Get Started</button>
        </div>
      </section> */}
    </div>
  )
}

export default Home