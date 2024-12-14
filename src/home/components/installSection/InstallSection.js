import React from 'react';
import './InstallSection.css';
import { ChartHistogramIcon, MoneyAdd02Icon, SecurityCheckIcon, WavingHand02Icon } from '../../../addons/icons';
import InvestApp from '../invest_placeholder.png'

export default function InstallSection() {
  return (
    <div className="landing-container">
      <div className="left-section">
        <div className="phone-mockup">
          <img 
            src={InvestApp} 
            alt="Tiidel app interface showing assets and transactions"
            className="mockup-image"
          />
        </div>
        <div className="download-buttons">
          <AppStoreButton />
          <PlayStoreButton />
        </div>
      </div>
      <div className="right-section">
        <div className="feature">
          <div className="feature-icon">
            <SecurityCheckIcon />
          </div>
          <div className="feature-content">
            <h2>Secure and Reliable</h2>
            <p>Our app ensures top-notch security for your data and transactions, giving you peace of mind.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <MoneyAdd02Icon />
          </div>
          <div className="feature-content">
            <h2>Effortless Transactions</h2>
            <ul>
              <li>Make payments quickly and easily through a secure platform.</li>
              <li>Track your transactions in real-time.</li>
              <li>Receive detailed reports to manage your finances effectively.</li>
            </ul>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <WavingHand02Icon />
          </div>
          <div className="feature-content">
            <h2>Exceptional User Support</h2>
            <p>Connect with our support team anytime for assistance and guidance.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <ChartHistogramIcon />
          </div>
          <div className="feature-content">
            <h2>Insights and Analytics</h2>
            <ul>
              <li>Access real-time analytics to track performance and trends.</li>
              <li>Gain insights to make informed decisions for growth.</li>
              <li>Use detailed dashboards to monitor key metrics.</li>
            </ul>
          </div>
        </div>
      </div>
      <a href="https://wa.me/+237676638050" className="whatsapp-button">
        Message us on WhatsApp
      </a>
    </div>
  );
}






const AppStoreButton = () => {
  return (
    <a href="#" class="playstore-button">
      <span class="icon">
        <svg
          fill="currentcolor"
          viewBox="-52.01 0 560.035 560.035"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"
            ></path>
          </g>
        </svg>
      </span>
      <span class="texts">
        <span class="text-1">Download form</span>
        <span class="text-2">App store</span>
      </span>
    </a>
  )
}


const PlayStoreButton = () => {
  return (
    <a class="playstore-button" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="icon" viewBox="0 0 512 512">
        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
      </svg>
      <span class="texts">
        <span class="text-1" style={{ textAlign: 'left'}}>Play Store</span>
        <span class="text-2">Google Play</span>
      </span>
    </a>
  )
}