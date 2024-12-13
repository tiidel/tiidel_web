import React from 'react';
import './articles.css'

const ArticleSection = () => {
  return (
    <div className="landing-section">
      <div className="news-section left">
        <div className="image-placeholder"></div>
        <div className="news-content">
          <span className="news-date">10 December 2024</span>
          <h2>Investment guide. Secure your future</h2>
          <p>The digital age offers remarkable opportunities for children across Africa.</p>
          <a href="#" className="read-more">READ MORE</a>
        </div>
      </div>
      <div className="news-sections">
        <div className="news-section">
          <div className="image-placeholder"></div>
          <div className="news-content">
            <span className="news-date">28 November 2024</span>
            <h2>Metrices used by investors</h2>
            <p>We took time to document all factors used in documentation</p>
            <a href="#" className="read-more">READ MORE</a>
          </div>
        </div>
        <div className="news-section">
          <div className="image-placeholder"></div>
          <div className="news-content">
            <span className="news-date">25 November 2024</span>
            <h2>MTN Group extends the magic </h2>
            <p>MTN Group is pleased to announce the official commercial launch of 5G services in Benin and Congo-Brazzaville, bringing the latest advancements in telecommunications to these markets.</p>
            <a href="#" className="read-more">READ MORE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;