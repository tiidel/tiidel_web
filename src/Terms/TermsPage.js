import React, { useState, useEffect } from 'react'
import './Terms.css'
import { motion } from "framer-motion";

const TermsPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='terms_page'>
        <div className="progress_bar_container">
          <div 
            className="progress_bar_fill"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        <header className='terms_page_header'>
          <div className='terms_header_content'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Terms and Conditions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Last Updated: April 29, 2025
            </motion.p>
          </div>
        </header>

        <div className='terms_container'>
          <section className='terms_section'>
            <h2>1. Introduction</h2>
            <p>Welcome to Tiidel Investment App ("the App", "Tiidel", "we", "us", "our"). This comprehensive document outlines the Terms and Conditions ("Terms") that govern your use of our investment platform and all associated services. Our platform is designed to foster financial inclusion and connect African markets to global opportunities through innovative technology and user-centric solutions.</p>
            <p>These Terms constitute a legally binding agreement between you and Tiidel Investment App. By accessing, registering for, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree with any portion of these Terms, you must immediately discontinue use of our platform and services.</p>
            <p>We are committed to maintaining transparency and ensuring that our users fully understand their rights, obligations, and the scope of our services. These Terms are designed to protect both our users and our platform while facilitating a secure and efficient investment environment.</p>
          </section>

          <section className='terms_section'>
            <h2>2. Account Creation, Security and User Obligations</h2>
            <h3>2.1 Account Registration</h3>
            <p>The process of creating an account on Tiidel Investment App requires careful attention to detail and commitment to accuracy. When establishing your account, you must provide complete and accurate information, including but not limited to:</p>
            <ul>
              <li>Your full legal name, as it appears on government-issued identification documents</li>
              <li>A valid and active email address that you regularly monitor</li>
              <li>A current phone number capable of receiving both SMS messages and WhatsApp communications</li>
              <li>Your physical location, including country of residence and specific address details</li>
            </ul>
            
            <h3>2.2 User Authentication</h3>
            <p>To ensure the highest level of security for your account and investments, we implement a sophisticated multi-layer authentication system that combines various security measures:</p>
            <p><strong>Primary Device Security:</strong> Our platform leverages your device's built-in biometric authentication capabilities, which may include fingerprint recognition, facial recognition, or other biometric methods supported by your device.</p>
            <p><strong>Two-Factor Authentication (2FA):</strong> Every account must maintain active two-factor authentication utilizing both WhatsApp and email channels.</p>
            
            <h3>2.3 Prohibited Activities</h3>
            <p>In our commitment to maintaining a secure and trustworthy investment platform, we strictly prohibit certain activities:</p>
            <ul>
              <li><strong>Fraudulent Transactions:</strong> Any attempt to conduct fraudulent transactions is strictly prohibited.</li>
              <li><strong>Multiple Account Creation:</strong> Each individual is permitted to maintain only one active account on our platform.</li>
              <li><strong>Unauthorized Content Distribution:</strong> All content available on our platform is protected by intellectual property rights and usage agreements.</li>
            </ul>
            
            <h3>2.4 Account Security</h3>
            <p>Users must:</p>
            <ul>
              <li>Maintain the confidentiality of their account credentials</li>
              <li>Use provided security features including biometric authentication and PIN</li>
              <li>Enable two-factor authentication when available</li>
              <li>Not share account access with third parties</li>
              <li>Immediately notify Tiidel of any unauthorized access</li>
            </ul>
          </section>

          <section className='terms_section'>
            <h2>3. Financial Transactions and Risk Disclosure</h2>
            <h3>3.1 Deposits and Withdrawals</h3>
            <p>Our platform facilitates secure financial transactions through carefully implemented processes and partnerships with trusted payment providers.</p>
            <p><strong>Deposit Process:</strong> We currently process all monetary transactions through our integration with MTN Mobile Money API, ensuring secure and traceable payment processing.</p>
            <div className='transaction_limits'>
              <div className='limit_item'>
                <span>Minimum deposit (stocks):</span>
                <span>10,000 XAF</span>
              </div>
              <div className='limit_item'>
                <span>Maximum deposit (stocks):</span>
                <span>2,000,000 XAF</span>
              </div>
              <div className='limit_item'>
                <span>Minimum deposit (local):</span>
                <span>100,000 XAF</span>
              </div>
              <div className='limit_item'>
                <span>Maximum deposit (local):</span>
                <span>No limit</span>
              </div>
            </div>
            
            <p><strong>Withdrawal Process:</strong> Withdrawals are typically processed within 24 to 48 hours.</p>
            
            <h3>3.2 Investment Risk Disclosure</h3>
            <p>Tiidel Investment App implements advanced technologies and partnerships to provide users with comprehensive investment opportunities. However, it is crucial that all users understand and acknowledge the inherent risks associated with investment activities.</p>
            <p><strong>AI-Powered Investment Insights:</strong> Our platform utilizes sophisticated artificial intelligence systems integrated with OpenAI technology to provide investment insights and analyses.</p>
            <p><strong>Company Metrics and Information:</strong> Our platform provides access to company metrics and financial information that is updated on a monthly basis.</p>
            
            <h3>3.3 Fee Structure</h3>
            <div className='fee_structure'>
              <div className='fee_item'>
                <span>Deposit Fee:</span>
                <span>1000 XAF per transaction</span>
              </div>
              <div className='fee_item'>
                <span>Withdrawal Fee:</span>
                <span>1000 XAF per transaction</span>
              </div>
              <div className='fee_item'>
                <span>Organization Investment Fee:</span>
                <span>5% of investment amount</span>
              </div>
            </div>
          </section>

          <section className='terms_section'>
            <h2>4. Privacy and Data Protection</h2>
            <h3>4.1 Data Collection</h3>
            <p>Our data collection practices are designed to ensure platform security, regulatory compliance, and service optimization. We collect and process various types of user data:</p>
            <ul>
              <li><strong>Personal Information:</strong> Full legal name, contact information, physical address, identification documents, and banking information.</li>
              <li><strong>Platform Usage Data:</strong> Login records, transaction history, investment preferences, and device information.</li>
              <li><strong>Investment Activity:</strong> Trading history, investment preferences, and interaction with platform features.</li>
            </ul>
            
            <h3>4.2 Data Security Measures</h3>
            <p>We implement comprehensive security measures to protect user data:</p>
            <ul>
              <li><strong>Encryption Protocols:</strong> End-to-end encryption for all sensitive data and secure storage systems.</li>
              <li><strong>Authentication Security:</strong> Two-factor authentication, biometric verification, and session management.</li>
              <li><strong>System Monitoring:</strong> Real-time security monitoring, threat detection, and regular audits.</li>
            </ul>
          </section>

          <section className='terms_section'>
            <h2>5. Platform Maintenance and Service Disruption</h2>
            <h3>5.1 Scheduled Maintenance</h3>
            <ul>
              <li>Users will receive 24-hour advance notice for scheduled maintenance</li>
              <li>Notifications will be sent via email and WhatsApp</li>
              <li>Users should complete pending transactions before maintenance begins</li>
              <li>Maintenance schedules will be posted on the platform</li>
            </ul>
            
            <h3>5.2 Service Interruptions</h3>
            <ul>
              <li>Unplanned service interruptions exceeding 24 hours will be communicated</li>
              <li>Updates will be provided through official communication channels</li>
              <li>No guarantee of continuous, uninterrupted access is provided</li>
            </ul>
          </section>

          <section className='terms_section'>
            <h2>6. Customer Support and Dispute Resolution</h2>
            <h3>6.1 Support Channels</h3>
            <p>Available support methods:</p>
            <ul>
              <li>Phone support</li>
              <li>WhatsApp assistance</li>
              <li>Email support</li>
              <li>Web support page</li>
              <li>Live chat (coming soon)</li>
            </ul>
            
            <h3>6.2 Response Times</h3>
            <ul>
              <li>Standard response time: Within 48 hours</li>
              <li>Service interruption notifications: Within 24 hours</li>
              <li>Dispute resolution timeframe: Within 48 hours</li>
            </ul>
            
            <h3>6.3 Claims Process</h3>
            <p>For transaction-related claims:</p>
            <ul>
              <li>Submit supporting documentation</li>
              <li>Provide transaction IDs and screenshots</li>
              <li>Complete identity verification</li>
              <li>Await investigation results</li>
            </ul>
          </section>

          <section className='terms_section'>
            <h2>7. Account Termination</h2>
            <h3>7.1 Termination Grounds</h3>
            <p>Accounts may be terminated for:</p>
            <ul>
              <li>Fraudulent activities</li>
              <li>Terms of Service violations</li>
              <li>Submission of false documents</li>
              <li>Extended inactivity</li>
              <li>Regulatory compliance issues</li>
            </ul>
            
            <h3>7.2 Account Suspension</h3>
            <ul>
              <li>Accounts may be suspended during investigations</li>
              <li>Users will be notified of suspension reasons</li>
              <li>Appeal process available through support channels</li>
            </ul>
          </section>

          <section className='terms_section'>
            <h2>8. Legal and Regulatory Compliance</h2>
            <h3>8.1 Jurisdiction</h3>
            <p>Tiidel operates in compliance with applicable financial regulations in its country of operation. Additional updates will be provided as necessary.</p>
            
            <h3>8.2 Local Investments</h3>
            <p>Users investing in local assets (non-exchange markets) must upload valid documents for verification and will receive feedback based on their submissions.</p>
          </section>

          <section className='terms_section'>
            <h2>9. Content and Liability</h2>
            <h3>9.1 User-Uploaded Content</h3>
            <p>Users are responsible for ensuring the accuracy of any content (videos, articles) uploaded to the platform. False or misleading information may result in penalties.</p>
            
            <h3>9.2 Disclaimer on Metrics</h3>
            <p>Company metrics displayed on the platform are collected monthly and are not guaranteed. Tiidel strives to validate all data but assumes no liability for inaccuracies.</p>
          </section>

          <section className='terms_section'>
            <h2>10. Updates and Modifications</h2>
            <p>Tiidel reserves the right to modify these terms at any time. Users will be notified of significant changes, and continued use of the platform constitutes acceptance of modified terms.</p>
          </section>

          <section className='terms_section'>
            <h2>11. Contact Information</h2>
            <p>For questions or concerns, please contact us via:</p>
            <div className='contact_info'>
              <div className='contact_item'>
                <span>Email:</span>
                <span>contact@tiidel.com</span>
              </div>
              <div className='contact_item'>
                <span>Phone:</span>
                <span>+237676638050</span>
              </div>
              <div className='contact_item'>
                <span>WhatsApp:</span>
                <span>+237676638050</span>
              </div>
            </div>
          </section>

          <section className='terms_section final_section'>
            <h2>12. Acceptance of Terms</h2>
            <p>By creating an account and using Tiidel Investment App, users acknowledge that they have read, understood, and agree to these Terms and Conditions. These terms are mandatory and non-negotiable for platform use.</p>
          </section>
        </div>
      </div>
    </>
  )
}

export default TermsPage