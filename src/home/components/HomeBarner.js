import React from 'react'
import { useNavigate } from 'react-router-dom'
import RSVPButton from '../../addons/buttons/RSVPButton'

const HomeBanner = () => {
    const navigate = useNavigate()
    return (
    <div className='home_banner'>
        <div className="container">
            <div className="banner_text">
                <div>
                    <h1>Invest in your future</h1>
                    <p>It is never too late to invest in your future. Join the waiting list</p>
                </div>
                {/* <button onClick={() => navigate('/wait-list')}>RSVP Here</button> */}
                <RSVPButton />
            </div>
        </div>
    </div>
  )
}

export default HomeBanner
