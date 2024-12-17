import React from 'react'
import './FAQ.css'
import { RiSearch2Line } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
import { HiShieldCheck } from "react-icons/hi2";
import { RiComputerLine } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";
import { FcParallelTasks } from "react-icons/fc";
import { motion } from "framer-motion";


import Support from '../assets/images/landing/Support.png'
import Adapt from '../assets/images/landing/Adapt.png'


const FaqPage = () => {
  return (
    <>
        <div className='faq_page'>
            <header className='faq_page_header'>
                <div className='search_section'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                        How can we help you?
                    </motion.h2>
                    <div className='faq_search_bar'>
                        <input type='text' placeholder='Search for answers...' />
                        <button><RiSearch2Line /></button>
                    </div>
                    <div className='faq_support_img_wrapper'>
                        <img src={Adapt} alt='get assistant with Tiidel' />
                    </div>
                </div>
                <div className='faq_server_problem'>
                    <h3>Having problems managing your school? Reach out to Tiidel employees with a help request </h3>
                    <button>get help with school</button>
                </div>
            </header>
            <div className='faq_support_img_wrapper fixed'>
                <img src={Support} alt='get assistant with Tiidel' />
            </div>

            <section className='faq_content'>
                <div className='faq_content_wrapper'>
                    <h2>Popular Questions</h2>
                    <div className='faq_content_questions'>
                        <div className='faq_content_question'>
                            <h3>How do I get started with Tiidel?</h3>
                            <p>To get started, simply download the Tiidel Investment app from the App Store or Google Play. After installation, create an account by providing your personal information, including your email and phone number. Once your account is set up, you can link your bank account or funding source, and you’re ready to start exploring investment options..</p>
                        </div>
                        <div className='faq_content_question'>
                            <h3>What types of investments can I make through Tiidel??</h3>
                            <p>Tiidel offers a variety of investment options, including stocks, bonds, and other assets. You can choose based on your risk appetite and investment goals. We also provide curated portfolios for users who prefer hands-off investing or who want guidance on which assets to invest in.</p>
                        </div>
                        <div className='faq_content_question'>
                            <h3>How do I track my investments on Tiidel?</h3>
                            <p>After logging in, you can view your investment portfolio in real-time on the dashboard. It provides detailed insights into the performance of your assets, including daily/weekly/monthly returns, total investment value, and a breakdown of your holdings.</p>
                        </div>
                        <div className='faq_content_question'>
                            <h3>How does Tiidel ensure my money is safe?</h3>
                            <p>Security is our top priority. Tiidel uses bank-grade encryption to secure your personal and financial data.  Our platform is fully regulated and complies with all industry standards to ensure your investments are secure. Additionally, funds are held in trusted financial institutions with strong security protocols.</p>
                        </div>
                        <div className='faq_content_question'>
                            <h3>What is the minimum amount required to start investing with Tiidel?</h3>
                            <p>The minimum investment amount on Tiidel depends on the asset you're investing in. For stocks, the minimum can be as low as $10, while for bonds or other assets, it may vary. Tiidel makes investing accessible for everyone by offering fractional shares and low entry barriers for various types of investments.</p>
                        </div>
                        <div className='faq_content_question'>
                            <h3>Can I withdraw my investment at any time?</h3>
                            <p>Yes, you can withdraw your investments at any time. Depending on the investment type, withdrawals are typically processed within 1-3 business days. Please note that certain investments, such as bonds or other long-term assets, may have withdrawal restrictions or penalties if cashed out early.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='faq_content'>
                <h2>Our Unique Services</h2>
                <div className='faq_services_grid_wrapper'>
                    <div className='service_grid'>
                        <h3>Adaptive Learning</h3>
                        <div className='faq_service_img_wrapper'><TbExchange /></div>
                        <p>Tiidel uses adaptive learning to provide personalized learning experiences for students.</p>
                    </div>
                    <div className='service_grid'>
                        <h3>Support</h3>
                        <div className='faq_service_img_wrapper'><MdContactSupport /></div>
                        <p>Tiidel provides 24/7 support to help you with any problems you may have.</p>
                    </div>
                    <div className='service_grid'>
                        <h3>Secure</h3>
                        <div className='faq_service_img_wrapper'><HiShieldCheck /></div>
                        <p>Tiidel uses the latest security measures to keep your data safe and secure.</p>
                    </div>
                    <div className='service_grid'>
                        <h3>Easy to Use</h3>
                        <div className='faq_service_img_wrapper'><RiComputerLine /></div>
                        <p>Tiidel is easy to use and requires no technical knowledge to get started.</p>
                    </div>
                    <div className='service_grid'>
                        <h3>Distributed work</h3>
                        <div className='faq_service_img_wrapper'><FcParallelTasks /></div>
                        <p>Tasks can now be distributed amongst staffs so we do the heavy lifting for you</p>
                    </div>

                </div>
            </section>
        </div>
    </>
  )
}

export default FaqPage