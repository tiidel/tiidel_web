import React from 'react'
import './home.css'
import HeroSection from './components/HeroSection'
import InstallSection from './components/installSection/InstallSection'
import ArticleSection from './components/articles/ArticleSection'

const Home = () => {
  return (
    <div className='home_page'>
      <HeroSection />
      <InstallSection />
      <ArticleSection />
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