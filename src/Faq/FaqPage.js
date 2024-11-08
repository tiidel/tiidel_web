import React from 'react'
import './FAQ.css'
import { RiSearch2Line } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
import { HiShieldCheck } from "react-icons/hi2";
import { RiComputerLine } from "react-icons/ri";
import { TbExchange } from "react-icons/tb";
import { FcParallelTasks } from "react-icons/fc";


import Support from '../assets/images/landing/Support.png'
import Adapt from '../assets/images/landing/Adapt.png'


const FaqPage = () => {
  return (
    <>
        <div className='faq_page'>
            <header className='faq_page_header'>
                <div className='search_section'>
                    <h2>How can we help you?</h2>
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
                            <p>Tiidel is a free management system for schools and colleges. You can get started by creating an account and adding your school details.</p>
                        </div>
                        <div className='faq_content_question'>
                            <h3>How do I add students to my school?</h3>
                            <p>After creating an account, you can add students by going to the students section and clicking on the add student button.</p>
                        </div>
                        <div className='faq_content_question'>
                            <h3>How do I add teachers to my school?</h3>
                            <p>After creating an account, you can add teachers by going to the teachers section and clicking on the add teacher button.</p>
                        </div>
                        <div className='faq_content_question'>
                            <h3>How do I create a class?</h3>
                            <p>After creating an account, you can create a class by going to
                                the classes section and clicking on the add class button.</p>
                        </div>
                        <div className='faq_content_question'>
                            <h3>How do I create a subject?</h3>
                            <p>After creating an account, you can create a subject by going to the subjects section and clicking on the add subject button.</p>
                        </div>
                        <div className='faq_content_question'>
                            <h3>How do I create an exam?</h3>
                            <p>After creating an account, you can create an exam by going to the exams section and clicking on the add exam button.</p>
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