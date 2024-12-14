// WaitingPage.js
import React from 'react';
import Image1 from './tiidel_placeholder_01.png';
import Image2 from './tiidel_placeholder_02.png';
import Image3 from './tiidel_placeholder_03.png';
import './WaitingPage.css';

const WaitingPage = () => {
  return (
    <div className="waiting-page">
      <div className="card-container">
        <div className="card">
          <img src={Image1} alt="Illustration 1" />
          <div className="card-content">
            <h2 style={{ color: '#59A954' }}>What's Cooking?</h2>
            <p>Something amazing is in the works. Stay tuned!</p>
          </div>
        </div>
        <div className="card">
          <img src={Image2} alt="Illustration 2" />
          <div className="card-content">
            <h2 style={{ color: '#03bfbf' }}>Shh, It's a Secret!</h2>
            <p>
              We're keeping this one under wraps for now. But trust us, it's going
              to be good.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Image3} alt="Illustration 3" />
          <div className="card-content">
            <h2 style={{ color: '#0360bd' }}>Chef's Kiss!</h2>
            <p>What we're cooking is so amazing, it's going to blow your mind.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingPage;